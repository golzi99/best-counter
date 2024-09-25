import React, {useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store';
import {CountType, SettingsType} from './types';
import {
    changeMaxValueAC,
    changeStartValueAC,
    setCounterStartValueAC,
    setErrorAC,
    setSettingsAC
} from './model/settings-reducer';
import {decreaseCounterAC, increaseCounterAC} from './model/counter-reducer';

function App() {
    const dispatch = useDispatch()

    const settings = useSelector<RootState, SettingsType>(state => state.settings)
    const counter = useSelector<RootState, CountType>(state => state.count)

    // const [startValue, setStartValue] = useState(() => {
    //     const storedStartValue = localStorage.getItem('startValue');
    //     return storedStartValue ? JSON.parse(storedStartValue) : 0;
    // })
    // const [maxValue, setMaxValue] = useState(() => {
    //     const storedMaxValue = localStorage.getItem('maxValue');
    //     return storedMaxValue ? JSON.parse(storedMaxValue) : 10;
    // })
    // const [counter, setCounter] = useState(() => {
    //     const storedCounter = localStorage.getItem('counterValue');
    //     return storedCounter ? JSON.parse(storedCounter) : startValue;
    // })

    useEffect(() => {
        settings.startValue < 0 || settings.startValue >= settings.maxValue ?
            dispatch(setErrorAC(true)) : dispatch(setErrorAC(false))

        // startValue < 0 || startValue >= maxValue ? setError(true) : setError(false)
        // localStorage.setItem('startValue', JSON.stringify(startValue))
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))

    }, [settings.startValue, settings.maxValue])

    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(counter))
    // }, [counter])

    useEffect(() => {
        dispatch(setCounterStartValueAC(settings.startValue))
    }, [])

    const onChangeStartValue = (value: number) => {
        dispatch(changeStartValueAC(value))
        !settings.settingMode && dispatch(setSettingsAC(true))
    }

    const onChangeMaxValue = (value: number) => {
        dispatch(changeMaxValueAC(value))
        !settings.settingMode && dispatch(setSettingsAC(true))
    }

    const setSettings = () => {
        dispatch(setSettingsAC(false))
        dispatch(setCounterStartValueAC(settings.startValue))
    }

    const increaseCounter = () => {
        // setCounter((c: number) => c + 1)
        dispatch(increaseCounterAC())
    }

    const decreaseCounter = () => {
        // setCounter((c: number) => c - 1)
        dispatch(decreaseCounterAC())
    }

    const resetCounter = () => {
        dispatch(setCounterStartValueAC(settings.startValue))
    }

    return (
        <Main>
            <SettingsBlock
                maxValue={settings.maxValue}
                startValue={settings.startValue}
                isSetting={settings.settingMode}
                error={settings.error}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                setSettings={setSettings}
            />
            <CounterBlock
                maxValue={settings.maxValue}
                counter={counter.count}
                disableReset={counter.count === settings.startValue}
                error={settings.error}
                increaseCounter={increaseCounter}
                decreaseCounter={decreaseCounter}
                resetCounter={resetCounter}
                isSetting={settings.settingMode}
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