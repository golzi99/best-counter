import React, {ChangeEvent, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [counter, setCounter] = useState(startValue)
    const [isSetting, setIsSetting] = useState(false)
    const [error, setError] = useState(false)

    const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+event.currentTarget.value)
        setIsSetting(true)
    }

    const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
        setIsSetting(true)
    }

    const setSettings = () => {
        setCounter(startValue)
        setIsSetting(false)
    }

    const increaseCounter = () => {
        setCounter(c => c + 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    return (
        <Main>
            <SettingsBlock
                maxValue={maxValue}
                startValue={startValue}
                isSetting={isSetting}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettings={setSettings}
            />
            <CounterBlock
                counter={counter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isSetting={isSetting}
            />
        </Main>
    );
}

export default App;

const Main = styled.main`
  background-color: ${myTheme.colors.bgColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`