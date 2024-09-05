import React, {useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [counter, setCounter] = useState(startValue)
    const [isSetting, setIsSetting] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        startValue < 0 || startValue >= maxValue ? setError(true) : setError(false)
    }, [startValue, maxValue])

    const onChangeStartValue = (value: number) => {
        setStartValue(value)
        // if (value < 0 || value >= maxValue)
        //     setError(true)
        // else
        //     setError(false)
        setIsSetting(true)
    }

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
        // if (value <= startValue)
        //     setError(true)
        // else
        //     setError(false)
        setIsSetting(true)
    }

    const setSettings = () => {
        setCounter(startValue)
        setIsSetting(false)
    }

    const increaseCounter = () => {
        setCounter(c => c + 1)
    }

    const decreaseCounter = () => {
        setCounter(c => c - 1)
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
                error={error}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettings={setSettings}
            />
            <CounterBlock
                maxValue={maxValue}
                counter={counter}
                disableReset={counter === startValue}
                error={error}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
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