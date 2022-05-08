// Types
import type {Reducer} from "react";
// Constants
import {SET_BILLS, SET_PAGINATION} from "./bills.constant";

export interface ActionInterface<P = any> {
    type: string;
    payload?: P;
}


export interface BillInterface {
    id: number
    date: string
    amount: number
    isWithdrawal: boolean
    tracking_code: number
    reference_number: string
}

export interface BillStateInterface {
    bills: Array<BillInterface>
    isLoading: boolean
    page: number
}


const initialState: BillStateInterface = {
    bills: [],
    isLoading: false,
    page: 1
}

export const billsReducer: Reducer<BillStateInterface, ActionInterface> = (state = initialState, action) => {
    switch (action.type) {
        case SET_BILLS:
            return {...state, bills: action.payload}
        case SET_PAGINATION :
            return {...state, page: action.payload}
        default:
            return state
    }
}