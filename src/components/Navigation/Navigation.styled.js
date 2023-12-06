import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavThumb = styled.nav``;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 0.3em 0.7em;
  font-size: 14px;
  font-weight: 500;
  color: #090909;
  background: #e8e8e8;
  border: 2px solid #e8e8e8;
  border-radius: 1em;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  width: 80px;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 13px;

  &.active,
  &:hover,
  &:focus {
    border: 2px solid #77c063;
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;
