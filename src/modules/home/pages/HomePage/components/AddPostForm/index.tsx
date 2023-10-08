import { FirebaseError } from 'firebase/app';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../../../../shared/components/Button';
import { Input } from '../../../../../../shared/components/Input';
import { Post } from '../../../../interfaces/Post';
import { getHashtags, getTextWithoutHashtags } from '../../../../utils';

import { AddPostContainer } from './styles';

interface AddPostFormProps{
  onAdd: (data: Post) => void
}
 export const AddPostForm = ({onAdd}: AddPostFormProps) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false)

  const addNewThink = async () => {
    setLoading(true)

    try {
      const content = contentRef.current?.value;
      const userName = userNameRef.current?.value;
      const city = cityRef.current?.value;

      if (content && userName &&city) {
        const hashtags = getHashtags(content);
        const contentWithoutTag = getTextWithoutHashtags(content);
        const post: Post = {id:uuidv4(),  content: contentWithoutTag, author:{city: city, name: userName, id: uuidv4() }, active: true, tags: hashtags, createdAt: new Date(), votes: 0, closed: false}
        onAdd(post)
      }
    }catch (error) {
      const err = error as FirebaseError;
      toast(err.code, {type: 'error'})
    } finally {
      setLoading(false)
    }
  };


  

  return (
    <AddPostContainer>
      <h2>Share a New Think</h2>
      <textarea required ref={contentRef} placeholder="What're you thinking?" ></textarea>
    
      <Input ref={userNameRef} placeholder='Your name'/>
      <Input ref={cityRef} placeholder='Your city'/>
      <Button isLoading={loading} onClick={addNewThink} title='Share'/>
    </AddPostContainer>
  );
};

