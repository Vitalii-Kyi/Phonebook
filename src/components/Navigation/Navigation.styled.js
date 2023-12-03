import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavThumb = styled.nav``;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 4px;
  font-weight: 700;
  color: blue;
  border: 4px outset blue;
  background-color: yellow;
  width: 122px;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 13px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover,
  &:focus {
    color: yellow;
    background-color: blue;
    transform: scale(1.08);
  }
`;
