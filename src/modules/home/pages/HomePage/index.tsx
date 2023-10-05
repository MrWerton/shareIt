import { AxiosError } from 'axios'
import { useEffect, useReducer } from 'react'
import { toast } from 'react-toastify'
import { ServiceLocator } from '../../../../shared/service-locator'
import { ApiService } from '../../../services/api'
import { AddPostForm } from './components/AddPostForm'
import { ListPosts } from './components/ListPosts'
import { ActionType, postReducer } from "./reducers"
import { Post } from './shared/interfaces/Post'
import { Container } from "./styles"

export const HomePage = () => {
  const [state, dispatch] = useReducer(postReducer, {posts: [] })
  const service = ServiceLocator.getInstance().get<ApiService>('api-service')


 const getAllPost = async() => {
  try{
    const posts = await service.getAll()

    dispatch({type: ActionType.LOAD, payload: {posts}})

  }catch(error){
    const err = error as AxiosError
    toast(err.message, {type: 'error'})
  }


 }


 const onAdd = async (data: Post) => {
   try {
      dispatch({type: ActionType.ADD, payload: {post: data}})
      await service.post(data);     
   } catch (error) {
    const err = error as AxiosError
    toast(err.message, {type: 'error'})
      dispatch({type: ActionType.REMOVE, payload: {id: data.id}})

   }
 }

 
 const handleUpVote = async (id: string) => {
  try {
     dispatch({type: ActionType.VOTEUP, payload: {id: id}})
     await service.upVote(id);     
  } catch (error) {
    const err = error as AxiosError
    toast(err.message, {type: 'error'})
     dispatch({type: ActionType.VOTEDOWN, payload: {id: id}})

  }
}
 
const handleDownVote = async (id: string) => {
  try {
     dispatch({type: ActionType.VOTEDOWN, payload: {id: id}})
     await service.upVote(id);     
  } catch (error) {
    const err = error as AxiosError
    toast(err.message, {type: 'error'})
     dispatch({type: ActionType.VOTEUP, payload: {id: id}})

  }
}


 useEffect(() => {
   getAllPost()
 
   
 }, [])
 

  return (
    <Container>
      <AddPostForm onAdd={onAdd}/>
      <ListPosts handleDownVote={handleDownVote} handleUpVote={handleUpVote} posts={state.posts} />

    </Container>
  )
}
