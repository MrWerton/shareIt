import { Form } from "./components/Form"
import { Welcome } from "./components/Welcome"
import { Container, DescriptionForm, FormContainer, Header, TitleForm } from "./styles"
export const LoginPage = () => {
  return (
    <Container>
        <Header>
            <h1>Logo</h1>
        </Header>
        <Welcome/>
        <FormContainer>
          <TitleForm>Login</TitleForm>
          <DescriptionForm>Please enter with yours credentials</DescriptionForm>
         <Form/>
        </FormContainer>
   
    </Container>
  )
}
