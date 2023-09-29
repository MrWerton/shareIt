import { FirebaseError } from 'firebase/app';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineAlert } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import { GrClose, GrMore } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { useAuth } from '../../../../../../shared/context/auth_context';
import { db } from '../../../../../../shared/services/firebase_config';
import { Post } from '../../shared/interfaces/Post';
import { ButtonTitle, Icon, Item, MenuContainer, MenuList } from "./styles";

interface MenuProps{
    post: Post
}
export const Menu = ({post}: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false)

  const {user} =useAuth()

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


const handlerClosePost=async()=>{
    setIsSending(true);
    try {
        const ref = doc(db, 'posts', post.id!);
        await updateDoc(ref, {closed:true})
        toast('The post was closed successfully!', {type: 'success'})
        setMenuOpen(false)
    } catch (error) {
        const err = error as FirebaseError;
        toast(err.code, {type: 'error'})
      } finally{
        setIsSending(false)
      }
}
const handlerRemovePost=async()=>{
    setIsSending(true);

    try {
        const ref = doc(db, 'posts', post.id!);
        await deleteDoc(ref)
        setMenuOpen(false)
        toast('The post was deleted successfully!', {type: 'success'})
    } catch (error) {
        const err = error as FirebaseError;
        toast(err.code, {type: 'error'})
      }finally{
        setIsSending(false)
      } 
}
const handlerReportPost=async()=>{
    setIsSending(true)

    try {
        const ref = doc(db, 'posts', post.id!);
        
        await updateDoc(ref, {active:false})
        setMenuOpen(false)
        toast('The post was reported successfully! We appreciate your feedback.', {type: 'success'})

    }catch (error) {
        const err = error as FirebaseError;
        toast(err.code, {type: 'error'})
      } finally{
        setIsSending(false)
      }
}
const iAmAuthor = post.author.id === user!.id;

  return (
    <MenuContainer>
      <ButtonTitle onClick={handleToggleMenu}>
        <Icon><GrMore/></Icon>
      </ButtonTitle>
      <MenuList open={menuOpen}>
       {iAmAuthor && <Item  disabled={isSending} onClick={handlerRemovePost}><BiTrash/> Delete</Item>}
        {!iAmAuthor && <Item disabled={isSending} onClick={handlerReportPost}><AiOutlineAlert/>Report</Item>}
        {!post.closed && <Item disabled={isSending} onClick={handlerClosePost}><GrClose/>Close</Item>}
      </MenuList>
    </MenuContainer>
  );
};

