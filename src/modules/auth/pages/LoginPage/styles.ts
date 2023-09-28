import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100vw;
    height: 100vh;


    .welcome-column{
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
    }

    .form-column{
        background-color: green;
    }

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;



export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    max-height: 400px;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    
`