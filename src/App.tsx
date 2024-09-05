import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {SettingsBlock} from './components/SettingsBlock';
import {CounterBlock} from './components/CounterBlock';

function App() {

    return (
        <Main>
            <SettingsBlock/>
            <CounterBlock/>
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