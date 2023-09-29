import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    width: 100%;
    background-color: white;

    &:not(&:last-child){
      border-bottom: 1px solid #aaa;
    }

`;

export const HeaderPost = styled.div`
  width: 100%;
  
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
export const BodyPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`

export const ProfileName = styled.strong`
`

export const ProfileLocalization = styled.p`
  font-size: 1rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 4px;

`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Tag = styled.p`
  font-size: .8rem;
  color: #444;

`

export const Description = styled.strong`
  font-size: 1rem;

`


export const Counter = styled.strong`
  

`

const buttonOption = styled.button`
 background-color: transparent;
  border: 0;
  padding: 1rem;
  cursor: pointer;

`

export const Up = styled(buttonOption)`
  color: green;
 
`

export const Down = styled(buttonOption)`
  color: red;
 
`
