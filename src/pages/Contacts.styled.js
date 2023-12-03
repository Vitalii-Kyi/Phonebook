import { createGlobalStyle } from 'styled-components';
import contactsImage from '../images/contacts.jpg';

export const ContactsGlobalStyle = createGlobalStyle`
body{
   background-image: url(${contactsImage});
}`;
