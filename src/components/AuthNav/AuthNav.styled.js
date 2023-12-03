import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const AuthLink = styled(NavLink)`
  gap: 12px;
  font-weight: bold;
  padding: 4px 8px;
  text-decoration: none;
  border: 1px outset #000000;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: green;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:visited {
    color: black;
  }

  &.active,
  &:hover,
  &:focus {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;
