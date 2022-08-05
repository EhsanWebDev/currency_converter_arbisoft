import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { sagaActions } from "./sagaActions";
import { currencyFetchSuccess } from "../../store/currencyReducer/currencyReducer";

let callAPI = async ({ url, method, data }) => {
    return await Axios({
        url,
        method,
        data
    });
};

export function* fetchDataSaga(action) {
    console.log({ actionINSaga: action })
    try {
        let result = yield call(() => Axios.get(`https://jsonplaceholder.typicode.com/todos/${action.payload.data}`, {
            headers: {
                'apikey': 'rFTYMJo0lfFdmO0iZGYfaFZAwSTybltM'
            }
        }));
        // let result = yield call(() => Axios.get('https://api.apilayer.com/fixer/convert?to=usd&from=gbp&amount=5', {
        //     headers: {
        //         'apikey': 'rFTYMJo0lfFdmO0iZGYfaFZAwSTybltM'
        //     }
        // }));
        yield put(currencyFetchSuccess(result.data));
    } catch (e) {
        yield put({ type: sagaActions.FETCH_CURRENCY_FAILED });
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_CURRENCY_LOADING, fetchDataSaga);
}
