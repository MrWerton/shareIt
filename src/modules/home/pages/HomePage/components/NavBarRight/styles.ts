import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100%;
    background-color: #0d1117;
    padding-right: 1rem;
    border-top-left-radius: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0px 0px #eee;
    @media (max-width: 768px) {
        background-color: white;
        grid-area: nav_right;

        height: 200px;
        padding: 0;
        margin: 0;
        box-shadow: 0;

   

    }
    

`

export const ProfileInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
     display: none;

    }
`