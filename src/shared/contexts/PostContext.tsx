import { ReactNode, createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { Post } from '../../modules/home/interfaces/Post';
import { ActionType, postReducer } from '../../modules/home/pages/HomePage/reducers';

interface PostContextProps {
  posts: Post[];
  addPost: (post: Post) => void;
  upVote: (id: string) => void;
  downVote: (id: string) => void;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

interface PostContextProviderProps {
  children: ReactNode;
}

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [state, dispatch] = useReducer(postReducer, { posts: [] });

 

  const addPost = useCallback(async (data: Post) => {
      dispatch({ type: ActionType.ADD, payload: { post: data } });
  
  }, []);

  const upVote = useCallback(async (id: string) => {
   
      dispatch({ type: ActionType.VOTEUP, payload: { id: id } });
  
  }, []);

  const downVote = useCallback(async (id: string) => {

      dispatch({ type: ActionType.VOTEDOWN, payload: { id: id } });
    
  }, []);

  const contextValue = useMemo(() => ({
    posts: state.posts,
    addPost,
    upVote,
    downVote,
  }), [state.posts, addPost, upVote, downVote]);

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
}


export const usePost = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }