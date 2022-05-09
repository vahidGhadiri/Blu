// Types
import type {BillStateInterface} from "../store/bills/bills.reducer";

export interface ActionInterface<P = any> {
    type: string;
    payload?: P;
}

export interface StateNetwork {
    bills: BillStateInterface
}