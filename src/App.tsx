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
            <Block>
                <FlexWrapper direction={'column'} gap={'48px'}>
                    <SetValuesBlock direction={'column'} justify={'space-around'}>
                        <InputSetting title={'max value'}></InputSetting>
                        <InputSetting title={'start value'}></InputSetting>
                    </SetValuesBlock>
                    <SetButtonBlock justify={'center'}>
                        <Button>SET</Button>
                    </SetButtonBlock>
                </FlexWrapper>
            </Block>
            <Block>

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

const Block = styled.div`
  padding: 24px;
  max-width: 40vw;
  width: 100%;
  height: 450px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 24px;
`

const SetValuesBlock = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`

const SetButtonBlock = styled(FlexWrapper)`
  padding: 18px;
  border: ${myTheme.colors.borderColor} 2px solid;
  border-radius: 18px;
`