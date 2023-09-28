import { ListPosts } from "./components/ListPosts"
import { NavBarLeft } from "./components/NavBarLeft"
import { NavBarRight } from "./components/NavBarRight"
import { Container } from "./styles"

export const HomePage = () => {
  return (
    <Container>
      <NavBarLeft/>
      <ListPosts/>
      <NavBarRight/>

    </Container>
  )
}
