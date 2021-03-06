import React, {useEffect, useState} from "react"
// Hooks
import {useDispatch, useSelector} from "react-redux";
// Actions
import BillActions from "../../../../store/bills/bills.action";
// Types
import type {BillInterface, BillStateInterface} from "../../../../store/bills/bills.reducer";
import type {StateNetwork} from "../../../../types/types";
// Styles
import {
    FlexWrapper,
    IsWithdrawal,
    StyledAmount,
    StyledBackIcon,
    StyledBill,
    StyledContent,
    StyledDate,
    StyledList
} from "./List.style";
// Icons
import {ImArrowDownRight, ImArrowUpLeft} from "react-icons/im";
import {MdKeyboardArrowLeft} from "react-icons/md";
// Helpers
import {convertGregorianToPersian, convertNumberToCashFormat} from "../../../../utils/helpers/function";
// Local Components
import {InfiniteScroll, Modal} from "../../../../components";
import {Detail} from "../Detail/Detail.component";

interface PropsInterface {
    data: Array<BillInterface>
}

const List: React.FC<PropsInterface> = (props) => {
    const [modal, setModal] = useState(false);
    const [selectedBill, setSelectedBill] = useState<BillInterface>({} as BillInterface)
    const {amount, date, tracking_code, reference_number} = selectedBill
    const dispatch = useDispatch()
    const billsState = useSelector<StateNetwork, BillStateInterface>((state) => state.bills)

    const openModal = (item: BillInterface) => {
        setModal(!modal)
        setSelectedBill(item)
    }

    const callNextPageData = () => {
        dispatch(BillActions.getBills())
    }

    useEffect(() => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 8) setModal(!modal);
        })
        return () => {
            document.removeEventListener('keypress', (e) => {
                if (e.keyCode === 8) setModal(!modal);
            })
        }
    })

    return (
        <InfiniteScroll onNext={() => callNextPageData()}
                        height="90vh" isEnd={billsState.bills.length >= 50}
                        endMessage="پایان لیست">
            <StyledList>
                {props.data.map((item, index) => (
                    <StyledBill key={index} onClick={() => openModal(item)}>
                        <IsWithdrawal isWithdrawal={item.isWithdrawal}>
                            {item.isWithdrawal ? <ImArrowDownRight/> : <ImArrowUpLeft/>}
                        </IsWithdrawal>
                        <StyledContent>
                            <StyledAmount isWithdrawal={item.isWithdrawal}>
                                <span>ریال</span>
                                <span>
                                {item.isWithdrawal ? "-" : "+"}
                                    {convertNumberToCashFormat(item.amount)}
                            </span>
                            </StyledAmount>
                            <FlexWrapper>
                                <p>{item.isWithdrawal ? "برداشت" : "واریز"}</p>
                                <StyledDate>{convertGregorianToPersian(item.date)}</StyledDate>
                            </FlexWrapper>
                        </StyledContent>
                        <StyledBackIcon>
                            <MdKeyboardArrowLeft/>
                        </StyledBackIcon>
                    </StyledBill>
                ))}
                <Modal show={modal} close={() => setModal(false)}>
                    <Detail amount={amount} date={date} trackingCode={tracking_code}
                            referenceNumber={reference_number}/>
                </Modal>
            </StyledList>

        </InfiniteScroll>
    )
}

export default List