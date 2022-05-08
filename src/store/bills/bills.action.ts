// Constants
import {SAGA_BILLS, SET_BILLS, SET_LOADING, SET_PAGINATION} from "./bills.constant";
import {BillInterface} from "./bills.reducer";

class Actions {
    /**
     * This action will fire Bills Saga
     */
    public getBills() {
        return {
            type: SAGA_BILLS
        }
    }

    /**
     * This Action will set  an array of bills information
     * @param data
     */
    public setBills(data: BillInterface) {
        return {
            type: SET_BILLS,
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

    /**
     * This Action set data from next page of api
     */
    public setPagination(page: number) {
        return {
            type: SET_PAGINATION,
            payload: page
        }
    }

}

const BillActions = new Actions()

export default BillActions