import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { useAuth } from '../../../../../../shared/context/auth_context'
import { AddPostForm } from '../AddPost'
import { Container, ProfileInfo } from './styles'

export const NavBarRight = () => {

  const {user} = useAuth()

  return (
    <Container>
      <ProfileInfo>
        <TypeAnimation delay={400} text={`Hello, ${user?.name}!`} color='#eee' fontSize='2rem'/>
      </ProfileInfo>
      <AddPostForm/>
    </Container>
  )
}
