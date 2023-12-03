import { createGlobalStyle } from 'styled-components';
import registerImage from '../images/register.jpg';

export const RegisterStyle = createGlobalStyle`
  body{
    background-image: url(${registerImage});
  }
`;
