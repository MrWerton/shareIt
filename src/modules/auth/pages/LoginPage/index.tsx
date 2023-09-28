import { TypeAnimation } from "../../../../shared/components/TyperAnimation"
import { Button, Container, DescriptionForm, Form, FormContainer, Header, Input, TitleForm, Welcome } from "./styles"

export const LoginPage = () => {
  return (
    <Container>
      <Header>

        <h1>Logo</h1>
      </Header>
      <Welcome>
          <TypeAnimation  fontSize="4rem" color="#eee" delay={1000} isTitle text="Welcome"/>
          <TypeAnimation  fontSize="2rem" color="#eee" delay={2000}  isTitle text="Are you ready to express your thoughts?"/>
      </Welcome>
        <FormContainer>
          <TitleForm>Login</TitleForm>
          <DescriptionForm>Please enter with yours credentials</DescriptionForm>
          <Form action="">
            <Input placeholder="Seu Email"/>
            <Input placeholder="Sua Senha"/>
            <Button>Login</Button>
          </Form>
        </FormContainer>
   
    </Container>
  )
}
