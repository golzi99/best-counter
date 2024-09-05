import {InputSetting} from './InputSetting';
import {Button} from '../styles/Button';
import React, {ChangeEvent} from 'react';
import {Block, SetButtonBlock, SetUpperBlock} from '../styles/StructurBlocksStyles';

type SettingsBlockPropsType = {
    maxValue: number,
    startValue: number,
    isSetting: boolean,
    onChangeMaxValue: (event: ChangeEvent<HTMLInputElement>) => void,
    onChangeStartValue: (event: ChangeEvent<HTMLInputElement>) => void,
    setSettings: () => void
}

export const SettingsBlock = ({maxValue, startValue, onChangeMaxValue, onChangeStartValue, setSettings}: SettingsBlockPropsType) => {
    return (
        <Block direction={'column'} gap={'36px'}>
            <SetUpperBlock direction={'column'} justify={'space-around'}>
                <InputSetting title={'max value'} value={maxValue} onChangeHandler={onChangeMaxValue}></InputSetting>
                <InputSetting title={'start value'} value={startValue} onChangeHandler={onChangeStartValue}></InputSetting>
            </SetUpperBlock>
            <SetButtonBlock justify={'center'} align={'center'}>
                <Button onClick={setSettings}>SET</Button>
            </SetButtonBlock>
        </Block>
    )
}
