import {SettingsType} from '../types';

const initialState: SettingsType = {
    maxValue: 10,
    startValue: 0,
    settingMode: false,
    error: false
}

export type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type SetSettingsActionType = ReturnType<typeof setSettingsAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>
export type SetCounterStartValueActionType = ReturnType<typeof setCounterStartValueAC>

export type SettingsActionType = ChangeStartValueActionType
    | ChangeMaxValueActionType
    | SetSettingsActionType
    | SetErrorActionType

export const settingsReducer = (state: SettingsType = initialState, action: SettingsActionType): SettingsType => {
    switch (action.type) {
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.payload.value}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.payload.value}
        case 'SET-SETTINGS':
            return {...state, settingMode: action.payload.settingMode}
        case 'SET-ERROR':
            return {...state, error: action.payload.errorState}
        default:
            return state
    }
}

export const changeStartValueAC = (value: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        payload: {
            value
        }
    } as const
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            value
        }
    } as const
}

export const setSettingsAC = (settingMode: boolean) => {
    return {
        type: 'SET-SETTINGS',
        payload: {
            settingMode
        }
    } as const
}

export const setErrorAC = (errorState: boolean) => {
    return {
        type: 'SET-ERROR',
        payload: {
            errorState
        }
    } as const
}

export const setCounterStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE-FOR-COUNTER',
        payload: {
            startValue
        }
    } as const
}