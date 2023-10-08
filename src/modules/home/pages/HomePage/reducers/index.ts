import { Post } from "../../../interfaces/Post"

interface PostState {
  posts: Post[]
}

export enum ActionType { ADD, UPDATE, REMOVE, LOAD, VOTEUP, VOTEDOWN }

type Add = { type: ActionType.ADD, payload: { post: Post } }
type Remove = { type: ActionType.REMOVE, payload: { id: string } }
type Load = { type: ActionType.LOAD, payload: { posts: Post[] } }
type VoteUp = { type: ActionType.VOTEUP, payload: { id: string } }
type VoteDown = { type: ActionType.VOTEDOWN, payload: { id: string } }

type Action = Add | Remove | Load | VoteUp | VoteDown


export function postReducer(state: PostState, action: Action): PostState {

  switch (action.type) {
    case ActionType.ADD: {
      const newPost = action.payload.post
      return { posts: [newPost, ...state.posts] }
    }
    case ActionType.VOTEDOWN: {
      const updatedPost: Post[] = state.posts.map(post=>{
        if(post.id ===action.payload.id){
          return{
            ...post,
            votes: post.votes - 1
          }
        }else{
          return post
        }
      })
      return { posts: updatedPost }
    }
    case ActionType.VOTEUP: {
      const updatedPost: Post[] = state.posts.map(post=>{
        if(post.id ===action.payload.id){
          return{
            ...post,
            votes: post.votes + 1
          }
        }else{
          return post
        }
      })
      return { posts: updatedPost }
    }
    
    
    case ActionType.REMOVE: {
      const remove_id = action.payload.id
      return { posts: state.posts.filter(post => post.id !== remove_id) }
    }
    case ActionType.LOAD: {
      return { posts: [...action.payload.posts] }
    }
    default: {
      console.warn('Action Inválida')
      return state
    }

  }

}


