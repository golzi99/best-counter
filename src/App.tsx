import React, {useEffect, useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {
    const [startValue, setStartValue] = useState(() => {
        const storedStartValue = localStorage.getItem('startValue');
        return storedStartValue ? JSON.parse(storedStartValue) : 0;
    })
    const [maxValue, setMaxValue] = useState(() => {
        const storedMaxValue = localStorage.getItem('maxValue');
        return storedMaxValue ? JSON.parse(storedMaxValue) : 10;
    })
    const [counter, setCounter] = useState(() => {
        const storedCounter = localStorage.getItem('counterValue');
        return storedCounter ? JSON.parse(storedCounter) : startValue;
    })
    const [isSetting, setIsSetting] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        startValue < 0 || startValue >= maxValue ? setError(true) : setError(false)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [startValue, maxValue])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

    const onChangeStartValue = (value: number) => {
        setStartValue(value)
        setIsSetting(true)
    }

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
        setIsSetting(true)
    }

    const setSettings = () => {
        setCounter(startValue)
        setIsSetting(false)
    }

    const increaseCounter = () => {
        setCounter((c: number) => c + 1)
    }

    const decreaseCounter = () => {
        setCounter((c: number) => c - 1)
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