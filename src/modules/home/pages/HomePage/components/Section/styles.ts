import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface TabProps {
  isActive: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding-right: calc(2rem + 20px);
    background-color: white;
    
    margin-right: -50px;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    &::-webkit-scrollbar{
        width: 0
            };
            &::-webkit-scrollbar-track {
              width: 0
            };
            &::-webkit-scrollbar-thumb {
           display: none;
        };
        
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        border-radius: 0;
        grid-area: list_post;
        margin: 0;
        padding: 0;
        background-color: white;


        overflow: visible;
        margin-bottom: 5rem;

    }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0;
  
  justify-content: center;
  gap: 1rem;
  background-color: white;
  width: 100%;
  height: 50px;
`;

export const Tab = styled.strong<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  
  color: #222;

  flex: 1;

  padding: 1rem;
  ${(props) =>
    props.isActive &&
    css`
      &::before {
        content: "";
        background-color: #0d1117;

        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `}
`;

export const Content = styled(motion.div)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  
`;
