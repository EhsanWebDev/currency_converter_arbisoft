import { Alert } from "react-native";
import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { currencyFetchSuccess } from "../../store/currencyReducer/currencyReducer";

import Api from "../Fetcher/Fetcher"
import { API_KEY } from "../../constants/constants";

export function* fetchDataSaga(action) {

    const { payload } = action || {}
    const {
        baseCurrency,
        secondaryCurrency,
        amount } = payload || {}

    try {
        let result = yield call(() => Api.create({ 'apikey': API_KEY })
            .api.get(`convert?to=${secondaryCurrency}&from=${baseCurrency}&amount=${amount}`));

        yield put(currencyFetchSuccess(result?.data));

    } catch (error) {

        yield put({ type: sagaActions.FETCH_CURRENCY_FAILED, error });
        Alert.alert(error?.message)
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_CURRENCY_LOADING, fetchDataSaga);
}
