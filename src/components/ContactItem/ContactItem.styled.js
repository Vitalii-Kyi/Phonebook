import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 1em;
  cursor: pointer;
  box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;

  &:hover {
    border: 1px solid #77c063;
    color: #090909;
  }
`;

export const ListItemLink = styled(Link)`
  display: flex;
  width: 100%;

  color: #000000;
  text-decoration: none;
  padding: 4px 0;
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
      font-size: 16px;
      font-weight: 500;
      margin-left: 12px;
      /*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;*/
      margin-right: auto;
      color: #090909;
    }

    b {
      margin-right: 22px;
      color: #090909;
    }
  }
`;

export const DelBtnItem = styled.button`
  display: block;
  font-size: 13px;
  /*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;*/

  color: #090909;
  padding: 0.1em 0.7em;
  text-decoration: none;
  border-radius: 1em;
  background: #e8e8e8;
  border: 2px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:hover {
    color: #ff0000;
    border: 1px solid #ffffff;
  }
`;
