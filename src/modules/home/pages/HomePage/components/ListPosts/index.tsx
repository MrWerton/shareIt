import { Post } from "../Post"
import { Container, Header, Title } from "./styles"

export const ListPosts = () => {
  return (
    <Container>
      <Header>
        <Title>Posts</Title>  
      </Header>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

      
    </Container>
  )
}
