// Constants
import {GET_BILLS, SAGA_BILLS, SET_LOADING} from "./bills.constant";
import {BillInterface} from "./bills.reducer";

class Actions {
    /**
     * This action will fire Bills Saga
     */
    public getBills(page: number, limit: number) {
        return {
            type: SAGA_BILLS,
            payload: {page, limit}
        }
    }

    /**
     * This Action will set  an array of bills information
     * @param data
     */
    public setBills(data: BillInterface) {
        return {
            type: GET_BILLS,
            payload: data
        }
    }

    /**
     * This Action will handle loading state
     * @param isLoading
     */
    public setLoading(isLoading: boolean) {
        return {
            type: SET_LOADING,
            payload: isLoading
        }
    }
}

const BillActions = new Actions()

export default BillActions