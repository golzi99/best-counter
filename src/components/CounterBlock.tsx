import React from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';
import {Button} from '../styles/Button';
import styled from 'styled-components';

export const CounterBlock = () => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock justify={'center'} align={'center'}>
                <Counter>VALUE</Counter>
            </SetUpperBlock>
            <SetButtonBlock justify={'space-around'} align={'center'}>
                <Button>INC</Button>
                <Button>RESET</Button>
            </SetButtonBlock>
        </Block>
    );
};

const Counter = styled.p`
  font-size: 92px;
  font-weight: bold;
`