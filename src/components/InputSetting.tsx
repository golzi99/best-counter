import React from 'react';
import styled from 'styled-components';
import {myTheme} from '../styles/Theme.styled';

type InputSettingPropsType = {
    title: string
}

export const InputSetting = ({title}: InputSettingPropsType) => {
    return (
        <StyledInputSetting>
            {title}:
            <Input type={'number'}/>
        </StyledInputSetting>
    );
};

const StyledInputSetting = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: ${myTheme.colors.font};
  font-size: 36px;
`

const Input = styled.input`
  outline: none;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: ${myTheme.colors.borderColor} 2px solid ;
  border-radius: 8px;
  color: #333;
  background-color: #f9f9f9;
`