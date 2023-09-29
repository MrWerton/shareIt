import { FirebaseError } from 'firebase/app'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '../../../../../../shared/components/Spinner'
import { db } from '../../../../../../shared/services/firebase_config'
import { Post } from '../../shared/interfaces/Post'
import { ListPosts } from '../ListPosts'
import { Center, Container } from "./styles"
export const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const getAllPosts = useCallback(() => {
    const refPosts = collection(db, 'posts')

    try {
      onSnapshot(query(refPosts, orderBy('createdAt', 'desc')), (doc) => {
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
  }, [])

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
