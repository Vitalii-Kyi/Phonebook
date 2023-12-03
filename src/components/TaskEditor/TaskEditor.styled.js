import { styled } from 'styled-components';

export const EditForm = styled.form`
  display: flex;
  gap: 12px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 100%;
  margin: auto;
  border: 1px outset black;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    width: 120px;
    height: 48px;
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

  input {
    width: 100%;
    padding: 2px 12px;
    border-radius: 4px;
    outline: none;
  }
`;
