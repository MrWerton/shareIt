import styled from "styled-components";


export const WelcomeContainer = styled.div`
        width: 100%;
        height: 100;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        text-align: start;
        gap: 10px;
        
        padding: 2rem;
        background-color: #0d1117;
        @media (max-width: 768px) {
           height: auto;
        }
`
