import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 2px 1px #eee;


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
  align-items: center;
`

export const ProfileName = styled.strong`
`

export const ProfileLocalization = styled.strong`

`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.strong`
  font-size: 1rem;
`

export const Description = styled.strong`
  font-size: 1rem;

`
export const Tag = styled.strong`
  

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
