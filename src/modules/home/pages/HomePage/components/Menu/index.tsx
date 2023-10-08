import { FirebaseError } from 'firebase/app';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { GrClose, GrMore } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { db } from '../../../../../../shared/services/firebase_config';
import { Post } from '../../../../interfaces/Post';
import { ButtonTitle, Icon, Item, MenuContainer, MenuList } from "./styles";

interface MenuProps{
    post: Post
}
export const Menu = ({post}: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false)


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


  return (
    <MenuContainer>
      <ButtonTitle onClick={handleToggleMenu}>
        <Icon><GrMore/></Icon>
      </ButtonTitle>
      <MenuList open={menuOpen}>      
       <Item disabled={isSending} onClick={handlerClosePost}><GrClose/>Close</Item>
      </MenuList>
    </MenuContainer>
  );
};

