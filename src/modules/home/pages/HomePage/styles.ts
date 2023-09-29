import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 100px 6fr 3fr;
    grid-template-areas: none;

    width: 100vw;
    height: 100vh;
    padding: 1.5rem 0rem 1rem;
    background-color: #0d1117;
    
    @media (max-width: 768px) {
        background-color: white;
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        background-color: white;
        grid-template-rows: 200px 4fr;

        grid-template-areas: 'nav_right nav_right nav_right'
                    'list_post list_post list_post'
                    'list_post list_post list_post'
                    'nav_left nav_left nav_left';
        
                    &::-webkit-scrollbar{
        width: 0
            };
            &::-webkit-scrollbar-track {
              width: 0
            };
            &::-webkit-scrollbar-thumb {
           display: none;
        };
       

    }

`

