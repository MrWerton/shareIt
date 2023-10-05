import styled from "styled-components";

export const AddPostContainer = styled.div`
    width: 100%;
    background-color: white;

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
        height: 100%;
        
        padding: 1rem;
    }

    button{
        margin-top: auto;
        
    }
   
`
