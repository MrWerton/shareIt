import { useRef } from 'react'
import { Button } from '../../../../../../shared/components/Button'
import { Input } from '../../../../../../shared/components/Input'
import { TypeAnimation } from '../../../../../../shared/components/TyperAnimation'
import { AddPostContainer, Container, ProfileInfo } from './styles'

export const NavBarRight = () => {


  const tagRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const addNewThink = ()=>{
    console.log('hello')

  }
  return (
    <Container>
      <ProfileInfo>
        <TypeAnimation text='Hello, Werton!' color='#eee' fontSize='2rem'/>
      </ProfileInfo>
       <AddPostContainer>
        <h2>Share a New Think</h2>
        <textarea required ref={contentRef} placeholder="What's you think?" name="" id=""></textarea>
        <Input  ref={tagRef} placeholder='Insert a Tag'/>
        <Button onClick={addNewThink} title='Share'/>
       </AddPostContainer>
    </Container>
  )
}
