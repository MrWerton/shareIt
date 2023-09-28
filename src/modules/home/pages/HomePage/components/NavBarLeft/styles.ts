import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100%;
    background-color: #0d1117;
    color: white;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    button{
        margin-top: auto;
    }
    @media (max-width: 768px) {
        margin: 0;

        padding: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: auto;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        justify-content: space-between;


  button{
    width: 70px;
  }

 }

`

export const Link = styled.div`
    width: 60px;
    border-radius: 10px;
    margin-top: 5rem;
    height: 60px;
    background-color: #0d11a1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

    &:hover{
        filter: opacity(.8);
    }
    @media (max-width: 768px) {
     margin: 0;
     position: fixed;
     
     bottom: 30px;
     border: 2px solid white;
     border-radius: 30px;
     left: calc(50% - 30px);


    }
`