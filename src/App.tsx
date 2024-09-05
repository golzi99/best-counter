import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(startValue)
    const [isSetting, setIsSetting] = useState(false)
    const [error, setError] = useState(false)
    const [progress, setProgress] = useState(0);

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
        setProgress(startValue)
        setIsSetting(false)
    }

    const increaseCounter = () => {
        setCounter(c => c + 1)
        setProgress(p => p + 1)
    }

    const resetCounter = () => {
        setCounter(startValue)
        setProgress(startValue)
    }

    return (
        <Main>
            <SettingsBlock
                maxValue={maxValue}
                startValue={startValue}
                isSetting={isSetting}
                error={error}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettings={setSettings}
            />
            <CounterBlock
                maxValue={maxValue}
                counter={counter}
                progress={progress / maxValue}
                disableReset={counter === startValue}
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
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
`