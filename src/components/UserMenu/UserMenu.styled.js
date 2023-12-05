import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    color: #090909;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

    &:hover,
    &:focus {
      border: 1px solid #ffffff;
      box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
    }
  }

  p {
    font-weight: 700;
  }
`;
