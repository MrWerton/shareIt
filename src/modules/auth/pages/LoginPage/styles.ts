import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    position: relative;
    width: 100vw;
    height: 100vh;  

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;

     
        overflow-y: auto;
    }
`;


export const Header = styled.header`
    width: 100%;
    padding: 1rem;
    position: absolute;
    left: 2rem;
    top: 2rem;
    color: #eee;
    @media (max-width: 760px) {
        width: 100%;
        padding: 1rem;
        left: 0;
        top: 0;
        position: sticky;
        height: 70px;
        background-color: white;

        color: #111;
  

        border-bottom: 2px solid #eee;
     
    }

`

export const Welcome = styled.div`
        width: 100%;
        height: 100;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        text-align: start;
        gap: 10px;
        
        padding: 2rem;
        background-color: #111;
        @media (max-width: 760px) {
            display: none;
        }
`



export const FormContainer = styled.div`
        width: 100%;
        height: 100%;
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        background-color: white;
       
    
`
export const Form = styled.form`
        width: 100%;
       flex: 2;
        max-width: 400px;
       

        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 1rem;
        gap: .5rem;

        
        @media (max-width: 760px) {
            height: 1000px;
            flex: 4;
        }

        
`

export const TitleForm = styled.strong`
        font-size: 2rem;
        color: #222;
        margin: 2rem 0;
        flex: 1;
       
`
export const Input = styled.input`
        width: 100%;
        border: 1px solid #222;
    
        padding: 1rem;
        border-radius: 10px;

        &:focus{
            outline: 0;
        }
`

export const Button = styled.button`
    width: 100%;
    padding: 1rem;
    background-color: #222;
    margin-top: 1rem;
    color: #eee;
    border-radius: 10px;
    border: 0;

    cursor: pointer;
    transition: filter .6s ease-in-out;

    &:hover{
        filter: opacity(.9);
        
    }

`