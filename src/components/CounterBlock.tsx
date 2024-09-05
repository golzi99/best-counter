import React from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';
import {Button} from '../styles/Button';
import styled from 'styled-components';

type CounterBlockPropsType = {
    counter: number,
    isSetting: boolean,
    increaseCounter: () => void
    resetCounter: () => void
}

export const CounterBlock = ({counter, increaseCounter, resetCounter, isSetting}: CounterBlockPropsType) => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock justify={'center'} align={'center'}>
                <Counter>{counter}</Counter>
            </SetUpperBlock>
            <SetButtonBlock justify={'space-around'} align={'center'}>
                <Button onClick={increaseCounter} disabled={isSetting}>INC</Button>
                <Button onClick={resetCounter} disabled={isSetting}>RESET</Button>
            </SetButtonBlock>
        </Block>
    );
};

const Counter = styled.p`
  font-size: 92px;
  font-weight: bold;
`