import React, {useEffect} from "react"
// Local Components
import List from "./components/List/List.component";
// Utils
import {useDispatch, useSelector} from "react-redux";
import BillActions from "../../store/bills/bills.action";
// Style
import {Container} from "./Bills.style";

const Bills = () => {
    const dispatch = useDispatch()
    const billsState = useSelector((state: any) => state.Bills.bills)

    useEffect(() => {
        dispatch(BillActions.getBills(1, 10))
    }, [])

    return (
        <Container>
            <p>گردش حساب</p>
            <List data={billsState}/>
        </Container>
    )
}

export default Bills