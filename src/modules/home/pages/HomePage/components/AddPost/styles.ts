import styled from "styled-components";

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
        height: 100%;
        height: 130px;
        
        padding: 1rem;
    }

    button{
        margin-top: auto;
        
    }
    @media (max-width: 768px) {
     
     flex-direction: column;

     margin: 0;
     height: 200px;
     padding: none;
     gap: 10px;

     border-radius: 0;
     border-bottom: 1px solid #aaa;
     z-index: 111;
     box-shadow: 0;
     h2{
        font-size: 1.3rem;
     }

     textarea{
        padding: 1rem;
        height: 150px;
     }
     button{
        width: auto;
        margin-left: auto;
     }

    }
`
