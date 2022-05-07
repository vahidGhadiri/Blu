// Utils
import {combineReducers} from "redux";
// Reducers
import {billsReducer} from "./bills/bills.reducer";

export const RootReducer = combineReducers({
    Bills: billsReducer
})