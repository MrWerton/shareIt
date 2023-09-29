import styled from "styled-components";

interface CounterProps{
  votes: number
}
interface InactiveProps{
  isInactive: boolean
}
export const Container = styled.div`
    padding: .3rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 200px;

    background-color: white;

    &:not(&:last-child){
      border-bottom: 1px solid #aaa;
    }

    @media (max-width: 720px) {
      padding: 0;
      padding-right: 10px;
    }

`;

export const HeaderPost = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`
export const VoteOption = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const BodyPost = styled.div<InactiveProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  gap: 1rem;
  filter: ${(props) => (props.isInactive ? 'blur(3px) opacity(0.2)' : 'none')};
  cursor: ${(props) => (props.isInactive ? 'none' : 'initial')};
  
`

export const ProfileName = styled.strong`
display: flex;
align-items: center;
font-size: 1.2rem;
gap: 10px;

`

export const ProfileLocalization = styled.p`
  font-size: .7rem;
  color: #444;
  gap: 5px;
  display: flex;
  align-items: center;
  margin-top: 4px;

`
export const TimerPublication = styled(ProfileLocalization)`
margin-top: 0;
font-size: .8rem;
gap: 0;
position: relative;

  
`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  
`
export const Footer = styled.div`
  margin-top: auto;
  display: flex;
    align-items: center;
  justify-content: space-between;
  width: 100%;
  
  span{
    
    display: flex;
    align-items: center;
    gap: 10px;
    
    &:first-child{
      flex: 1;
    }
  }
`

export const Tag = styled.p`
  font-size: .8rem;
  color: #0d11a1;

`

export const Description = styled.strong`
  flex: 1;
  font-size: 1.5rem;
  height: 100%;


`


export const Counter = styled.strong<CounterProps>`
  color: ${props=>props.votes > 0 ? 'green':props.votes < 0?'red': '#222'};
  font-weight: bold;

`

const ButtonVote = styled.button`
 background-color: transparent;
  border: 0;
  font-size: 1rem;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;

`

export const Up = styled(ButtonVote)`
  color: ${props=>props.disabled?'#444': 'green'};
 
`

export const Down = styled(ButtonVote)`
  
  color: ${props=>props.disabled?'#444': 'red'};

 
`

export const ButtonOption = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;

`

