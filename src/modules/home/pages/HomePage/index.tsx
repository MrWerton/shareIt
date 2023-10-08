import { AddPostForm } from './components/AddPostForm'
import { ListPosts } from './components/ListPosts'
import { Container } from "./styles"

export const HomePage = () => {

  return (
    <Container>
      <AddPostForm />
      <ListPosts  />
    </Container>
  )
}
