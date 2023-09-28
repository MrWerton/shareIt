import { BiHomeAlt } from 'react-icons/bi';
import { Button } from '../../../../../../shared/components/Button';
import { Container, Link } from './styles';

export const NavBarLeft = () => {
  return (
    <Container>
       <h1>ShareIt</h1>
       <Link><BiHomeAlt/></Link>
       <Button title='Sair'/>
    </Container>
  )
}
