import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { WelcomeContainer } from './styles'


export function Welcome(){
    return (
        <WelcomeContainer>
          <TypeAnimation  fontSize="4rem" color="#eee" delay={1000} isTitle text="Welcome"/>
          <TypeAnimation  fontSize="2rem" color="#eee" delay={2000}  isTitle text="Are you ready to express your thoughts?"/>
      </WelcomeContainer>
    )
}