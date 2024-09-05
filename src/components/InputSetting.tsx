import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {myTheme} from '../styles/Theme.styled';

type InputSettingPropsType = {
    title: string,
    value: number,
    onChangeHandler: (value: number) => void
    error: boolean
}

export const InputSetting = ({title, value, error, onChangeHandler}: InputSettingPropsType) => {

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(+event.currentTarget.value)
    }

    return (
        <StyledInputSetting>
            {title} :
            <Input type={'number'} value={value} error={error} onChange={(event) => onChange(event)}/>
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

const Input = styled.input<{error: boolean}>`
  outline: none;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: ${props => props.error ? 'red 3px solid' : '{myTheme.colors.borderColor} 2px solid'};
  border-radius: 8px;
  color: #333;
  background-color: ${props => props.error ? '#ff8c8c' : '#f9f9f9'};
`