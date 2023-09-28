import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    overflow-y: auto;
    padding: 0 1rem 1rem;
    padding-right: calc(2rem + 50px);
    background-color: white;
    margin-right: -50px;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    @media (max-width: 768px) {
     width: 100%;
     height: auto;
     border-radius: 0;
     margin: 0;
     padding: 0;

     overflow: visible;
     padding-bottom: 5rem;

    }

`
export const Header = styled.h2`
    position: sticky;
    top: 0;
    padding: 1rem;
    width: 100%;
    display: flex;
    background-color: white;
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
  @media (max-width: 768px) {
    font-size: 1.5rem;
     

    }

`
