import React from "react"
// Types
import type {BillInterface} from "../../../../store/bills/bills.reducer";
// Styles
import {
    FlexWrapper,
    IsWithdrawal,
    StyledBackIcon,
    StyledBill,
    StyledContent,
    StyledDate,
    StyledList
} from "./List.style";
import {ImArrowDownRight, ImArrowUpLeft} from "react-icons/im";
import {MdKeyboardArrowLeft} from "react-icons/md";

interface PropsInterface {
    data: Array<BillInterface>
}

const List: React.FC<PropsInterface> = (props) => {
    return (
        <StyledList>
            {props.data.map((item, index) => (
                <StyledBill key={index}>
                    <IsWithdrawal isWithdrawal={item.isWithdrawal} span={1}>
                        {item.isWithdrawal ? <ImArrowDownRight/> : <ImArrowUpLeft/>}
                    </IsWithdrawal>
                    <StyledContent>
                        <div>{item.amount}</div>
                        <FlexWrapper>
                            <div>{item.isWithdrawal ? "واریز" : "برداشت"}</div>
                            <StyledDate>{item.date}</StyledDate>
                        </FlexWrapper>
                    </StyledContent>
                    <StyledBackIcon>
                        <MdKeyboardArrowLeft/>
                    </StyledBackIcon>

                </StyledBill>
            ))}
        </StyledList>
    )
}

export default List