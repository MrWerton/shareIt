import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { Post as IPost } from '../../../../interfaces/Post'
import { Post } from '../Post'
import { Center, Container } from "./styles"

interface ListPostsProps{
  posts: IPost[]
  handleDownVote: (id: string)=> void;
  handleUpVote: (id: string)=> void
}
export const ListPosts = ({posts,handleUpVote, handleDownVote}: ListPostsProps) => {
 
  return (
    <Container>
      {posts.length > 0?
        posts.map(item=> <Post handleDownVote={handleDownVote} handleUpVote={handleUpVote} key={item.id} post={item}/>)
    :<Center>
        <TypeAnimation delay={400} text="No posts? No problem! Share your thoughts now..." />
    </Center>
      }
    </Container>
  )
}
