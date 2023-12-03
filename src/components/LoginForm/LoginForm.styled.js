import { Form } from 'formik';
import { styled } from 'styled-components';

export const FormThumb = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 480px;
  margin: auto;
  border: 1px outset black;
  border-radius: 4px;
  padding: 20px 28px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    margin-bottom: 28px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    margin-bottom: 12px;

    b {
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      color: red;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 2px 12px;
      border-radius: 4px;
      outline: none;
      text-align: center;
    }
  }
`;
