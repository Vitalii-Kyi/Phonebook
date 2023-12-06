import { styled } from 'styled-components';

export const TaskThumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px outset grey;
  padding: 8px;
  border: 1px solid #e8e8e8;
  border-radius: 1em;
  box-shadow: inset 4px 4px 6px #c5c5c5, inset -4px -4px 6px #ffffff;

  &:hover {
    border: 1px solid #77c063;
    color: #ff0000;
`;

export const Text = styled.b`
  text-align: initial;
  margin-top: 0;
  margin-bottom: 0;
`;

export const DelButton = styled.button`
  font-size: 13px;
  padding: 4px 8px;
  margin-left: auto;
  color: #090909;
  background-color: #e8e8e8;
  border: 1px solid #e8e8e8;
  border-radius: 1em;
  cursor: pointer;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  &:hover {
    border: 1px solid #77c063;
    color: #ff0000;
  }
`;

export const Checkbox = styled.input`
  margin-left: 8px;
  width: 18px;
  height: 18px;
  border-box: 1px solid #e8e8e8;
  cursor: pointer;
`;
