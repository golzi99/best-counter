import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {myTheme} from '../styles/Theme.styled';

type InputSettingPropsType = {
    title: string,
    value: number,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputSetting = ({title, value, onChangeHandler}: InputSettingPropsType) => {
    return (
        <StyledInputSetting>
            {title}:
            <Input type={'number'} value={value} onChange={(event) => onChangeHandler(event)}/>
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