import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { Post as IPost } from '../../shared/interfaces/Post'
import { Post } from '../Post'
import { Center, Container } from "./styles"

interface ListPostsProps{
  posts: IPost[]
}
export const ListPosts = ({posts}: ListPostsProps) => {
 
  return (
    <Container>
      {posts.length > 0?
        posts.map(item=> <Post key={item.id} post={item}/>)
    :<Center>
        <TypeAnimation delay={0} text="No posts? No problem! Share your thoughts now..." />
    </Center>
      }
    </Container>
  )
}
