import styled from "styled-components";

export const ButtonContainer = styled.button`
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