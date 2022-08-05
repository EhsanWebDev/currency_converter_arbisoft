import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import { themeReducer } from "./themeReducer/themeReducer"
import createSagaMiddleware from 'redux-saga'
import { currencyReducer } from "./currencyReducer/currencyReducer";
import saga from "../Api/Sagas/rootSaga"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist"
import { userReducer } from "./userReducer/userSlice";

const reducers = combineReducers({
    themes: themeReducer,
    currencyData: currencyReducer,
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['themes', 'user']
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [sagaMiddleware],
})
sagaMiddleware.run(saga);

export default store