import { createGlobalStyle } from 'styled-components';
import LoginImage from '../images/login.jpg';

export const LoginGlobalStyle = createGlobalStyle`
  body{
    background-image: url(${LoginImage});
  }
`;
