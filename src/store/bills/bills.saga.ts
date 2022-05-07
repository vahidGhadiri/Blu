// Utils
import {all, call, put, takeEvery} from "redux-saga/effects"
// Actions
import BillActions from "./bills.action";
// Types
import type {ActionInterface} from "./bills.reducer";
// Services
import BillService from "../../services/http/endpoints/bills.endpoint";
// Constants
import {SAGA_BILLS} from "./bills.constant";

export function* getBills(action: ActionInterface): any {
    yield put(BillActions.setLoading(true))
    try {
        const response = yield call(() => BillService.getBills(action.payload?.page, action.payload?.limit))
        yield put(BillActions.setBills(response.data))
        yield put(BillActions.setLoading(false))
    } catch (error) {
        yield put(BillActions.setLoading(false))
    }
}

export function* billsSaga() {
    yield all([
        takeEvery(SAGA_BILLS, getBills)
    ])
}