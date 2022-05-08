import React, {useEffect, useState} from "react"
// Local Components
import {Modal} from "../../components";
import List from "./components/List/List.component";
// Utils
import {useDispatch, useSelector} from "react-redux";
import BillActions from "../../store/bills/bills.action";

const Bills = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch()
    const billsState = useSelector((state: any) => state.Bills.bills)

    useEffect(() => {
        dispatch(BillActions.getBills(1, 10))
    }, [])

    return (
        <div>
            <List data={billsState}/>
            <Modal title="HEADER" show={modal} close={() => setModal(false)}>
                <div>...</div>
            </Modal>
        </div>
    )
}

export default Bills