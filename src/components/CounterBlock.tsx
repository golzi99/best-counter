import React from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';
import {Button} from '../styles/Button';
import styled from 'styled-components';

type CounterBlockPropsType = {
    counter: number,
    maxValue: number,
    startValue: number,
    progress: number,
    disableReset: boolean
    isSetting: boolean,
    error: boolean,
    increaseCounter: () => void,
    decreaseCounter: () => void,
    resetCounter: () => void,
}

export const CounterBlock = ({
                                 counter,
                                 maxValue,
                                 startValue,
                                 progress,
                                 increaseCounter,
                                 decreaseCounter,
                                 resetCounter,
                                 isSetting,
                                 error,
                                 disableReset
                             }: CounterBlockPropsType) => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock justify={'center'} align={'center'}>
                {!isSetting ? <div>
                    <Counter reachMax={counter === maxValue}>{counter}</Counter>
                    <ProgressBarContainer>
                        <ProgressBarFill progress={progress}/>
                    </ProgressBarContainer>
                </div> : error ?
                    <ErrorMessage>Incorrect value!</ErrorMessage> : <Message>Enter values and press "SET"</Message>}
            </SetUpperBlock>
            <SetButtonBlock justify={'space-around'} align={'center'}>
                <Button onClick={increaseCounter} disabled={isSetting || counter === maxValue}>INC</Button>
                <Button onClick={decreaseCounter} disabled={isSetting || counter === startValue}>DEC</Button>
                <Button onClick={resetCounter} disabled={isSetting || disableReset}>RESET</Button>
            </SetButtonBlock>
        </Block>
    );
};

const Counter = styled.p<{ reachMax: boolean }>`
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

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
`

const ProgressBarFill = styled.div<{progress: number}>`
  height: 100%;
  width: ${props => (props.progress) * 100}%;
  background-color: #76c7c0;
  transition: width 0.3s ease-in-out;
`