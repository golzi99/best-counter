import styled from 'styled-components';
import {FlexWrapper} from './FlexWrapper';
import {myTheme} from './Theme.styled';

export const Block = styled(FlexWrapper)`
  width: 100%;
  padding: 24px;
  max-width: 40vw;
  max-height: 500px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 24px;
  min-width: 520px;
`

export const SetUpperBlock = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

export const SetButtonBlock = styled(FlexWrapper)`
  height: 50%;
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`