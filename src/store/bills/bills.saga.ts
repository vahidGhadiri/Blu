// Utils
import {all, call, put, select, takeEvery} from "redux-saga/effects"
// Actions
import BillActions from "./bills.action";
// Types
// Services
import BillService from "../../services/http/endpoints/bills.endpoint";
// Constants
import {SAGA_BILLS} from "./bills.constant";

/**
 * This Saga will get bill's amount, bill Id , trackingCode, referenceNumber, date
 * handle pagination
 * handle loading
 */
export function* getBills(): any {
    yield put(BillActions.setLoading(true))
    const billsState = yield select()
    const {page} = billsState.bills
    try {
        yield put(BillActions.setPagination(page + 1))
        const response = yield call(() => BillService.getBills(page, JSON.stringify(page * 10)))
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