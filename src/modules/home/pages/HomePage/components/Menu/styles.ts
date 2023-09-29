import styled from 'styled-components';

interface MenuProps{
    open: boolean
}

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ButtonTitle = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const MenuList = styled.div<MenuProps>`
  position: absolute;
  top: 100%;
  left: 0;

  background-color: #fff;
  font-size: 1rem;
  font-weight: normal;
  border-radius: 4px;
  box-shadow: 0 2px 4px #aaa;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

export const Item = styled.button`
background-color: transparent;
border: 0;
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Icon = styled.span`
  margin-left: 5px;
`;

