import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {FlexWrapper} from './styles/FlexWrapper';
import {InputSetting} from './components/InputSetting';
import {Button} from './styles/Button';

function App() {
    return (
        <Main>
            <Block direction={'column'} gap={'36px'}>
                <SetValuesBlock direction={'column'} justify={'space-around'}>
                    <InputSetting title={'max value'}></InputSetting>
                    <InputSetting title={'start value'}></InputSetting>
                </SetValuesBlock>
                <SetButtonBlock justify={'center'} align={'center'}>
                    <Button>SET</Button>
                </SetButtonBlock>
            </Block>
            <Block direction={'column'} gap={'36px'}>
                <CounterValue justify={'center'} align={'center'}>
                    <Counter>VALUE</Counter>
                </CounterValue>
                <SetButtonBlock justify={'space-around'} align={'center'}>
                    <Button>INC</Button>
                    <Button>RESET</Button>
                </SetButtonBlock>
            </Block>
        </Main>
    );
}

export default App;

const Main = styled.main`
  background-color: ${myTheme.colors.bgColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`

const Block = styled(FlexWrapper)`
  width: 100%;
  padding: 24px;
  max-width: 40vw;
  max-height: 450px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 24px;
`

const SetValuesBlock = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

const SetButtonBlock = styled(FlexWrapper)`
  height: 50%;
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

const CounterValue = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

const Counter = styled.p`
  font-size: 92px;
  font-weight: bold;
`