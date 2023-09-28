import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100%;
    background-color: #0d1117;
    padding-right: 1rem;
    border-top-left-radius: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0px 0px #eee;
    @media (max-width: 768px) {
     
        padding: 0;
        height: auto;
        margin: 0;
        box-shadow: 0;

     flex-direction: row;

    }
    

`

export const AddPostContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 100%;
    background-color: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 1rem;
    color: #222;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    h2{
        margin-bottom: 1rem;
    }

    textarea{
        width: 100%;
        border: 1px solid #222;
        border-radius: 10px;
        outline: none;
        resize: none;
        padding: 1rem;
        height: 30%;
    }

    button{
        margin-top: auto;
    }
    @media (max-width: 768px) {
     
     flex-direction: column;

     margin: 0;
     padding: none;
     gap: 10px;

     border-radius: 0;
     box-shadow: 0;
     h2{
        font-size: 1.5rem;
     }

     button{
        width: auto;
        margin-left: auto;
        

     }

    }
`

export const ProfileInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
     display: none;

    }
`