import { styled } from 'styled-components';

export const EditForm = styled.form`
  display: flex;
  gap: 12px;
  background-color: #e8e8e8;
  width: 100%;
  margin: auto;
  border: 1px solid #e8e8e8;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 6px #ffffff;

  button {
    width: 130px;
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
    border: 2px solid #77c063;
    color: #090909;
  }

  input {
    width: 100%;
    padding: 6px 12px;
    border: 1px solid #e8e8e8;
    border-radius: 1em;
    outline: none;
    text-align: center;
    box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;
  }
`;
