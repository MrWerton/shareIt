import { BiHomeAlt } from 'react-icons/bi';
import { Button } from '../../../../../../shared/components/Button';
import { useAuth } from '../../../../../../shared/context/auth_context';
import { Container, Link, Logo } from './styles';

export const NavBarLeft = () => {
  const {signOut} = useAuth()
  return (
    <Container>
       <Logo>ShareIt</Logo>
       <Link><BiHomeAlt/></Link>
       <Button title='Logout' onClick={signOut}/>
    </Container>
  )
}
