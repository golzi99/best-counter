import React from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';
import {Button} from '../styles/Button';
import styled from 'styled-components';

type CounterBlockPropsType = {
    counter: number,
    maxValue: number,
    disableReset: boolean
    isSetting: boolean,
    error: boolean,
    increaseCounter: () => void,
    resetCounter: () => void,
}

export const CounterBlock = ({counter, maxValue, increaseCounter, resetCounter, isSetting, error, disableReset}: CounterBlockPropsType) => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock justify={'center'} align={'center'}>
                {!isSetting ? <Counter reachMax={counter===maxValue}>{counter}</Counter> : error ?
                    <ErrorMessage>Incorrect value!</ErrorMessage> : <Message>Enter values and press "SET"</Message>}
            </SetUpperBlock>
            <SetButtonBlock justify={'space-around'} align={'center'}>
                <Button onClick={increaseCounter} disabled={isSetting || counter===maxValue}>INC</Button>
                <Button onClick={resetCounter} disabled={isSetting || disableReset}>RESET</Button>
            </SetButtonBlock>
        </Block>
    );
};

const Counter = styled.p<{reachMax: boolean}>`
  font-size: 92px;
  font-weight: bold;
  color: ${props => props.reachMax && 'red'}
`

const Message = styled.p`
  font-size: 48px;
  font-weight: bold;
`

const ErrorMessage = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: red
`