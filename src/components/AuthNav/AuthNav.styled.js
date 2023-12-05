import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const AuthLink = styled(NavLink)`
  color: #090909;
  padding: 0.3em 1em;
  font-size: 15px;
  text-decoration: none;
  border-radius: 1em;
  background: #e8e8e8;
  border: 2px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:visited {
    color: #5a5a5a;
  }

  &:hover {
    border: 2px solid #77c063;
  }
  &.active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }

  &:focus {
    border: 2px solid white;
  }
`;
