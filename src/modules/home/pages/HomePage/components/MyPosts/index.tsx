import { FirebaseError } from 'firebase/app'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '../../../../../../shared/components/Spinner'
import { useAuth } from '../../../../../../shared/context/auth_context'
import { db } from '../../../../../../shared/services/firebase_config'
import { Post } from '../../shared/interfaces/Post'
import { ListPosts } from '../ListPosts'
import { Center, Container } from "./styles"
export const MyPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const {user} = useAuth()

  const getAllPosts = useCallback(() => {
    const refPosts = collection(db, 'posts')

    try {
      onSnapshot(query(refPosts, where('author.id', '==', user!.id)), (doc) => {
        const postData = doc.docs.map((doc) => {
          const posts = doc.data() as Post
          const id = doc.id

          return {
            ...posts,
            id
          }
        }) as Post[]

        setPosts(postData)
      })
    } catch (error) {
      const err = error as FirebaseError;
      toast(err.code, {type: 'error'})
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    getAllPosts()

    return () => {
      return getAllPosts()
    }
  }, [getAllPosts])
  return (
    <Container>
    {loading?
    <Center>
      <Spinner/>
    </Center>
    
    : <ListPosts posts={posts} />}
  </Container>
  )
}
