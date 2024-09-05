import styled from 'styled-components';
import {myTheme} from './Theme.styled';

export const Button = styled.button`
  background-color: ${myTheme.colors.borderColor};
  padding: 20px;
  color: ${myTheme.colors.bgColor};
  font-weight: bold;
  font-size: 48px;
  border-radius: 24px;
  height: fit-content;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: aqua;
  }
  
  &:disabled {
    background-color: grey;
  }
`