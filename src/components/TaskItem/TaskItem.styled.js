import { styled } from 'styled-components';

export const TaskThumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px outset grey;
  padding: 2px;
  border-radius: 4px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.08);
  }
`;

export const Text = styled.b`
  text-align: initial;
  margin-top: 0;
  margin-bottom: 0;
`;

export const DelButton = styled.button`
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-left: auto;
  padding: 2px 8px;
  color: white;
  background-color: #0000000;
  border-radius: 4px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: grey;
    transform: scale(1.1);
  }
`;

export const Checkbox = styled.input`
  margin-left: 8px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
