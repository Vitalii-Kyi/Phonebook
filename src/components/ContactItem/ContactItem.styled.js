import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  color: black;
  border: 1px outset blue;
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ListItemLink = styled(Link)`
  display: flex;
  width: 100%;
  color: #000000;
  text-decoration: none;

  &:visited {
    color: #000000;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      display: inline-block;
      font-size: 18px;
      font-weight: 700;
      margin-left: 12px;
      /*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;*/
      margin-right: auto;
    }

    b {
      margin-right: 48px;
      color: red;
    }
  }
`;

export const DelBtnItem = styled.button`
  display: block;
  font-size: 13px;
  /*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;*/
  padding: 2px 8px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 4px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: red;
    transform: scale(1.2);
  }
`;
