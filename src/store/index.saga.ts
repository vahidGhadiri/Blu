// Utils
import {all, fork} from "redux-saga/effects";
// Sagas
import {billsSaga} from "./bills/bills.saga";


/**
 * RootSaga /
 * Merge all sagas together to observe all dispatched actions.
 */
export function* RootSaga() {
    yield all([
        fork(billsSaga)
    ])
}