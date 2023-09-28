import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../../../../../shared/components/Button'
import { Input } from '../../../../../../shared/components/Input'
import { FormContainer, GoogleButton } from './styles'

export const Form = () => {
  
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate=useNavigate()

   

    const handleLoginFormSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()


        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
       
        navigate('/home')
       

          console.log({email, password})

        

    }
 
  return (
    <FormContainer onSubmit={handleLoginFormSubmit}>
            <Input ref={emailRef} placeholder="Your Email"/>
            <Input ref={passwordRef} placeholder="Your Password"/>
            <Button  title='Login' type='submit'/>
            <GoogleButton>Login with Google</GoogleButton>
          </FormContainer>
  )
}


