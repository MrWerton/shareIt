import { TypeAnimation } from "../../../../shared/components/TyperAnimation"
import { Container, Form } from "./styles"

export const LoginPage = () => {
  return (
    <Container>
      <div className="welcome-column">
          <TypeAnimation  fontSize="4rem" color="#eee" delay={1000} isTitle text="Welcome"/>
          <TypeAnimation  fontSize="2rem" color="#eee" delay={2000}  isTitle text="Are you ready to express your thoughts?"/>
      </div>
      <div className="form-column">
        <Form>
          <input/>
        </Form>
      </div>
    </Container>
  )
}
