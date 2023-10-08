import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { usePost } from '../../../../../../shared/contexts/PostContext'
import { Post } from '../Post'
import { Center, Container } from "./styles"


export const ListPosts = () => {
 const {posts} = usePost()
  return (
    <Container>
      {posts.length > 0?
        posts.map(item=> <Post  post={item}/>)
    :<Center>
        <TypeAnimation delay={400} text="No posts? No problem! Share your thoughts now..." />
    </Center>
      }
    </Container>
  )
}
