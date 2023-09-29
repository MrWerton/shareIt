import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`
export const Header = styled.h2`
    position: sticky;
    top: 70px;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        max-width: 100px;
    }
    @media (max-width: 768px) {
     width: 100%;
     height: auto;
     border-radius: 0;
     margin: 0;
     border: 1px solid #eee;
     padding: 1rem;
     overflow: visible;


    }
`
export const Title = styled.h2`
    font-size: 2rem;
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }

`

export const Center = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

`


