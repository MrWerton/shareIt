import { useAuth } from "../../../../shared/context/auth_context"
import { GoogleButton } from "./components/Form/styles"
import { Welcome } from "./components/Welcome"
import { Container, FormContainer, Header, TitleForm } from "./styles"
export const LoginPage = () => {
  const {loginGoogle} = useAuth()
  return (
    <Container>
        <Header>
            <h1>ShareIt</h1>
        </Header>
        <Welcome/>
        <FormContainer>
          <TitleForm>Get Started</TitleForm>
          <GoogleButton onClick={loginGoogle}>Login with Google</GoogleButton>

        </FormContainer>
   
    </Container>
  )
}
