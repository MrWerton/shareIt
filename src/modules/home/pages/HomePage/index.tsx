import { NavBarLeft } from "./components/NavBarLeft"
import { NavBarRight } from "./components/NavBarRight"
import { Section } from "./components/Section"
import { Container } from "./styles"

export const HomePage = () => {
  return (
    <Container>
      <NavBarLeft/>
      <Section/>
      <NavBarRight/>
    </Container>
  )
}
