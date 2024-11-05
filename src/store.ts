import {applyMiddleware, combineReducers, legacy_createStore, UnknownAction} from 'redux'
import {CounterActionType, counterReducer} from './model/counter-reducer';
import {SettingsActionType, settingsReducer} from './model/settings-reducer';
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk';
import {loadState, saveState} from './utils/localstorage-utils';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    count: counterReducer,
    settings: settingsReducer,
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>

type AppActionType = CounterActionType | SettingsActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionType>

store.subscribe(() => {
    saveState({
        count: store.getState().count,
        settings: store.getState().settings
    })
})

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store