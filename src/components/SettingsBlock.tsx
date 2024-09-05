import {InputSetting} from './InputSetting';
import {Button} from '../styles/Button';
import React from 'react';
import {Block, SetButtonBlock, SetValuesBlock} from '../styles/StructurBlocksStyles';

export const SettingsBlock = () => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetValuesBlock direction={'column'} justify={'space-around'}>
                <InputSetting title={'max value'}></InputSetting>
                <InputSetting title={'start value'}></InputSetting>
            </SetValuesBlock>
            <SetButtonBlock justify={'center'} align={'center'}>
                <Button>SET</Button>
            </SetButtonBlock>
        </Block>
    )
}
