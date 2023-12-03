import { createGlobalStyle } from 'styled-components';
import HomeImage from '../images/home.jpg';

export const HomeGlobalStyle = createGlobalStyle`
  body{
  background-image: url(${HomeImage});
  }

  svg{
    width: 220px;
    height: 220px;
    color: blue;
  }
`;
