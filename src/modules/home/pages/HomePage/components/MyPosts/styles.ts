import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
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

