import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../../../../../shared/components/Button';
import { Input } from '../../../../../../shared/components/Input';
import { Post } from '../../../../interfaces/Post';
import { getHashtags, getTextWithoutHashtags } from '../../../../utils';

import { usePost } from '../../../../../../shared/contexts/PostContext';
import { AddPostContainer } from './styles';


 export const AddPostForm = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false)
  const {addPost} = usePost()

  const addNewThink = async () => {
    setLoading(true)

   
      const content = contentRef.current?.value;
      const userName = userNameRef.current?.value;
      const city = cityRef.current?.value;

      if (content && userName &&city) {
        const hashtags = getHashtags(content);
        const contentWithoutTag = getTextWithoutHashtags(content);
        const post: Post = {id:uuidv4(),  content: contentWithoutTag, author:{city: city, name: userName, id: uuidv4() }, active: true, tags: hashtags, createdAt: new Date(), votes: 0, closed: false}
        addPost(post)
      }
    }
  


  

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

