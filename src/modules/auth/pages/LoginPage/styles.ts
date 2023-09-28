import styled from "styled-components";
export const Container = styled.main`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr;
    position: relative;
    width: 100vw;
    height: 100vh;  

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr 1fr;

     
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
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
        left: 0;
        top: 0;
        position: sticky;
        background-color: #0d1117;


        color: #eee;

     
    }

`




export const FormContainer = styled.div`
        width: 100%;
        height: 100%;
       
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 2rem;
        background-color: white;
       
    
`


export const TitleForm = styled.strong`
        font-size: 2rem;
        color: #222;
        text-align: start;
        margin-bottom: 1rem;
        @media (max-width: 768px) {
            font-size: 2rem;
            
        }
       
`
export const DescriptionForm = styled.p`
        font-size: 3rem;
        color: #333;
        margin-bottom: 2rem;
        @media (max-width: 768px) {
            font-size: 1rem;
        }
       
`



