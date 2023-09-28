import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 100px 6fr 3fr;
    

    width: 100vw;
    height: 100vh;
    padding: 1.5rem 0rem 1rem;
    background-color: #0d1117;
    
    @media (max-width: 768px) {
        display: flex;
        margin: 0;
        padding: 0;
        flex-direction: column-reverse;
        align-items: flex-start;
        align-items: flex-start;
        overflow-y: auto;

    }

`

