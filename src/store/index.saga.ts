// Utils
import {all, fork} from "redux-saga/effects";
// Sagas
import {billsSaga} from "./bills/bills.saga";

export function* RootSaga() {
    yield all([
        fork(billsSaga)
    ])
}