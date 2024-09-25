import {SettingsType} from '../types';
import {changeMaxValueAC, changeStartValueAC, setErrorAC, setSettingsAC, settingsReducer} from './settings-reducer';

let startState: SettingsType

beforeEach(() => {
    startState = {
        maxValue: 10,
        startValue: 0,
        settingMode: false,
        error: false
    }
})

test('correct change maxValue', () => {
    const endState = settingsReducer(startState, changeMaxValueAC(20))

    expect(endState.maxValue).toBe(20)
})

test('correct change startValue', () => {
    const endState = settingsReducer(startState, changeStartValueAC(5))

    expect(endState.startValue).toBe(5)
})

test('correct change status of settings', () => {
    const endState = settingsReducer(startState, setSettingsAC(true))

    expect(endState.settingMode).toBeTruthy()
})

test('correct change status of error', () => {
    const endState = settingsReducer(startState, setErrorAC(true))

    expect(endState.error).toBeTruthy()
})