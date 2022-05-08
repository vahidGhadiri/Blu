import React, {useEffect, useState} from "react"
// Local Components
import {Modal} from "../../components";
import List from "./components/List/List.component";
// Utils
import {useDispatch, useSelector} from "react-redux";
import BillActions from "../../store/bills/bills.action";
// Style
import {Container} from "./Bills.style";

const Bills = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch()
    const billsState = useSelector((state: any) => state.Bills.bills)

    useEffect(() => {
        dispatch(BillActions.getBills(1, 10))
    }, [])

    return (
        <Container>
            <p>گردش حساب</p>
            <List data={billsState}/>
            <Modal title="HEADER" show={modal} close={() => setModal(false)}>
                <div>...</div>
            </Modal>
        </Container>
    )
}

export default Bills