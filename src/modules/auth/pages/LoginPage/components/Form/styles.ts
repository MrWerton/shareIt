import styled from "styled-components";
import { ButtonContainer } from "../../../../../../shared/components/Button/styles";

export const FormContainer = styled.form`
        width: 100%;
        max-width: 400px;
       

        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 1rem;
        gap: .5rem;
       

        
`
export const GoogleButton = styled(ButtonContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid #222;
    background-color: white;
    color: #222;
`
