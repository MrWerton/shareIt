import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100%;
    background-color: #0d1117;
    color: white;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    

    @media (max-width: 768px) {
        grid-area: nav_left;
        margin: 0;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: auto;
        flex-direction: row;
        position: fixed;
        bottom: 0;
        z-index: 2222;
        left: 0;
        padding:0 1rem .8rem;
        right: 0;
        align-items: center;
        justify-content: space-between;


        button{
            width: 70px;
        }

 }

`

export const Link = styled.div`
    width: 60px;
    border-radius: 10px;
    
    height: 60px;
    background-color: #0d11a1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

    &:hover{
        filter: opacity(.8);
    }
    @media (max-width: 768px) {
     margin: 0;
     position: fixed;
     
     bottom: 36px;
     border: 2px solid white;
     border-radius: 30px;
     left: calc(50% - 30px);


    }
`

export const Logo = styled.h1`
    margin-top: 8px;
    font-size: 1.4rem;
`