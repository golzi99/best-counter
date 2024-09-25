import {CountType} from '../types';
import {counterReducer, decreaseCounterAC, increaseCounterAC} from './counter-reducer';
import {setCounterStartValueAC} from './settings-reducer';

let startState: CountType

beforeEach(() => {
    startState = {
        count: 2
    }
})

test('correct increased counter', () => {
    const endState = counterReducer(startState, increaseCounterAC())

    expect(endState.count).toBe(3)
})

test('correct decreased counter', () => {
    const endState = counterReducer(startState, decreaseCounterAC())

    expect(endState.count).toBe(1)
})

test('correct set startValue of counter', () => {
    const endState = counterReducer(startState, setCounterStartValueAC(0))

    expect(endState.count).toBe(0)
})