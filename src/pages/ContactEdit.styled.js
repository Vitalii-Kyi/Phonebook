import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';

export const ContactEditStyle = createGlobalStyle`
body{

    background-color: #e8e8e8;
}
`;

export const FormThumb = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #e8e8e8;
  width: 380px;
  margin: auto;
  border: 1px solid #e8e8e8;
  border-radius: 1em;
  padding: 1em 3.2em;
  margin-bottom: 1em;
  text-align: center;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 6px #ffffff;

  button {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1.6em;
    padding: 0.3em 1em;
    border-radius: 1em;
    color: #5a5a5a;
    background: #e8e8e8;
    border: 2px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  button:hover,
  button:focus {
    border: 1px solid #77c063;
    color: #090909;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    color: #5a5a5a;
    margin-bottom: 0.7em;

    b {
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      color: #ff0000;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 6px 12px;
      border: 1px solid #e8e8e8;
      border-radius: 1em;
      outline: none;
      text-align: center;
      box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;
    }
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: blue;
  margin: 22px auto;
  padding: 10px;
  width: 780px;
  height: fit-content;
  border: 4px outset #000;
  border-radius: 13px;
  background-color: rgba(119, 136, 153, 0.8);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.02em;

  &.active {
    color: blue;
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background-color: rgba(119, 136, 153, 0.2);
  }
  /* h3 {
    color: blue;
    border: 4px outset blue;
    background-color: yellow;
    max-width: max-content;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 28px;
  } */
`;
