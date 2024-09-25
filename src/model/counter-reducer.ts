import {CountType} from '../types';
import {SetCounterStartValueActionType} from './settings-reducer';


const initialState = {
    count: 0
}

export type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
export type DecreaseCounterActionType = ReturnType<typeof decreaseCounterAC>


type ActionType = IncreaseCounterActionType | DecreaseCounterActionType | SetCounterStartValueActionType

export const counterReducer = (state: CountType = initialState, action: ActionType): CountType => {
    switch (action.type) {
        case 'INCREASE-COUNTER':
            return {...state, count: state.count + 1};
        case 'DECREASE-COUNTER':
            return {...state, count: state.count - 1};
        case 'SET-START-VALUE-FOR-COUNTER':
            return {...state, count: action.payload.startValue};
        default:
            return state
    }
}

export const increaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER'
    } as const
}

export const decreaseCounterAC = () => {
    return {
        type: 'DECREASE-COUNTER'
    } as const
}