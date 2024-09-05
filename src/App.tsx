import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(startValue)
    const [isSetting, setIsSetting] = useState(false)
    const [error, setError] = useState(false)

    const onChangeStartValue = (value: number) => {
        setStartValue(value)
        if (value < 0 || value >= maxValue)
            setError(true)
        else
            setError(false)
        setIsSetting(true)
    }

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
        if (value <= startValue)
            setError(true)
        else
            setError(false)
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
        setCounter(startValue)
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
                maxValue={maxValue}
                counter={counter}
                error={error}
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