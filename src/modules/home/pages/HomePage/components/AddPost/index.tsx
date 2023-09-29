import { addDoc, collection } from 'firebase/firestore';
import { memo, useRef, useState } from 'react';
import { Button } from '../../../../../../shared/components/Button';
import { useAuth } from '../../../../../../shared/context/auth_context';
import { db } from '../../../../../../shared/services/firebase_config';
import { Address } from '../../shared/interfaces/Address';
import { Post } from '../../shared/interfaces/Post';
import { getHashtags } from '../../shared/utils';
import { AddPostContainer } from './styles';


 const AddPostFormComponent = () => {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false)
  const {user} = useAuth()

  const addNewThink = async () => {
    try {
      const content = contentRef.current?.value;

      if (content) {
        const hashtags = getHashtags(content);
        const address = await getLocalization();
        SavePostInFirestore({content: content, author:{address: address, name: user!.name, id: user!.id}, active: false, tags: hashtags, createdAt: new Date()})
      }
    } catch (error) {
      console.error(error);
    }
  };


  async function SavePostInFirestore(data: Post){
    setLoading(true)
    try {
      const postRef = collection(db, 'posts')
    

      await addDoc(postRef, data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }



  async function getLocalization(): Promise<Address> {
    try {
      if (navigator.geolocation) {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const googleGeocodingApiKey = import.meta.env.VITE_FIREBASE_GOOGLE_MAP_KEY;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleGeocodingApiKey}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const address = data.results[0].formatted_address.split(",");
          const city = address[address.length - 3].trim();
          const country = address[address.length - 1].trim();
          return { city, country };
        } else {
          throw new Error("Dados de localização não encontrados");
        }
      } else {
        throw new Error("Geolocation not supported");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  function getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  return (
    <AddPostContainer>
      <h2>Share a New Think</h2>
      <textarea required ref={contentRef} placeholder="What's you think?" name="" id=""></textarea>
      <Button isLoading={loading} onClick={addNewThink} title='Share'/>
    </AddPostContainer>
  );
};

export const AddPostForm =memo(AddPostFormComponent, ()=> false);
