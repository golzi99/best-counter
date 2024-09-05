import {InputSetting} from './InputSetting';
import {Button} from '../styles/Button';
import React from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';

type SettingsBlockPropsType = {
    maxValue: number,
    startValue: number,
    isSetting: boolean,
    error: boolean,
    onChangeMaxValue: (value: number) => void,
    onChangeStartValue: (value: number) => void,
    setSettings: () => void
}

export const SettingsBlock = ({maxValue, startValue, onChangeMaxValue, onChangeStartValue, setSettings, error, isSetting}: SettingsBlockPropsType) => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock direction={'column'} justify={'space-around'}>
                <InputSetting title={'max value'} value={maxValue} error={startValue >= maxValue} onChangeHandler={onChangeMaxValue}></InputSetting>
                <InputSetting title={'start value'} value={startValue} error={startValue < 0 || startValue >= maxValue} onChangeHandler={onChangeStartValue}></InputSetting>
            </SetUpperBlock>
            <SetButtonBlock justify={'center'} align={'center'}>
                <Button onClick={setSettings} disabled={error || !isSetting}>SET</Button>
            </SetButtonBlock>
        </Block>
    )
}
