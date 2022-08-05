import { configureStore, } from "@reduxjs/toolkit";
import { themeReducer } from "./themeReducer/themeReducer"
import createSagaMiddleware from 'redux-saga'
import { currencyReducer } from "./currencyReducer/currencyReducer";
import saga from "../Api/Sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        themes: themeReducer,
        currencyData: currencyReducer
    },
    middleware: (getDefaultMiddleware) => [sagaMiddleware],
})
sagaMiddleware.run(saga);

export default store