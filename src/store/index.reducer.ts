// Utils
import {combineReducers} from "redux";
// Reducers
import {billsReducer} from "./bills/bills.reducer";

/**
 * Root Reducer /
 * Combine all reducers together to control by redux reducers observer
 */
export const RootReducer = combineReducers({
    bills: billsReducer
})