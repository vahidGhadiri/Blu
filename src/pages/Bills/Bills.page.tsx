import React, {useEffect} from "react"
// Local Components
import List from "./components/List/List.component";
import {Spinner} from "../../components";
// Utils
import {useDispatch, useSelector} from "react-redux";
import BillActions from "../../store/bills/bills.action";
// Style
import {Container} from "./Bills.style";


const Bills = () => {
    const dispatch = useDispatch()
    const billsState = useSelector((state: any) => state.Bills.bills)

    useEffect(() => {
        dispatch(BillActions.getBills())
    }, [])

    return (
        <Container>
            {billsState.length !== 0 ? (
                <>
                    <p>گردش حساب</p>
                    <List data={billsState}/>
                </>
            ) : (<Spinner hasOverlay/>)}
        </Container>
    )
}

export default Bills