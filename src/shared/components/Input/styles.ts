import styled from "styled-components";

export const InputContainer = styled.div`
        width: 100%;
        
        border-radius: 10px;
        input{
            border: 1px solid #222;
            border-radius: 10px;
            padding: 1rem;
            width: 100%;

            &:focus{
                outline: 0;
            }
        
        }

        span{
            margin-top: 10px;
            color: red;
        }
`

