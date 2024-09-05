import React from 'react';
import {Block, SetButtonBlock} from '../styles/StructurBlocksStyles';
import {Button} from '../styles/Button';
import styled from 'styled-components';
import {FlexWrapper} from '../styles/FlexWrapper';
import {myTheme} from '../styles/Theme.styled';

export const CounterBlock = () => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <CounterValue justify={'center'} align={'center'}>
                <Counter>VALUE</Counter>
            </CounterValue>
            <SetButtonBlock justify={'space-around'} align={'center'}>
                <Button>INC</Button>
                <Button>RESET</Button>
            </SetButtonBlock>
        </Block>
    );
};

const CounterValue = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

const Counter = styled.p`
  font-size: 92px;
  font-weight: bold;
`