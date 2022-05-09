import React, {useEffect} from "react"
// Local Components
import List from "./components/List/List.component";
import {Spinner} from "../../components";
// Utils
import {useDispatch, useSelector} from "react-redux";
import BillActions from "../../store/bills/bills.action";
// Style
import {Container} from "./Bills.style";
// Types
import type {StateNetwork} from "../../types/types";
import type {BillStateInterface} from "../../store/bills/bills.reducer";


const Bills = () => {
    const dispatch = useDispatch()
    const billsState = useSelector<StateNetwork, BillStateInterface>((state) => state.bills)

    useEffect(() => {
        dispatch(BillActions.getBills())
    }, [])

    return (
        <Container>
            {billsState.bills.length !== 0 ? (
                <>
                    <p>گردش حساب</p>
                    <List data={billsState.bills}/>
                </>
            ) : (<Spinner hasOverlay/>)}
        </Container>
    )
}

export default Bills