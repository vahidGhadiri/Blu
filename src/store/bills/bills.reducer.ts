// Types
import type {Reducer} from "react";
// Constants
import {GET_BILLS} from "./bills.constant";

interface BillsActionInterface {
    payload?: any
    type: string
}

interface BillInterface {
    id: number
    date: string
    amount: number
    isWithdrawal: boolean
    tracking_code: number
    reference_number: string
}

interface BillStateInterface {
    bills: Array<BillInterface>
    isLoading: boolean
}


const initialState: BillStateInterface = {
    bills: [],
    isLoading: false
}

export const billsReducer: Reducer<BillStateInterface, BillsActionInterface> = (state = initialState, action) => {
    switch (action.type) {
        case GET_BILLS:
            return {...state, bills: action.payload}
        default:
            return state
    }
}