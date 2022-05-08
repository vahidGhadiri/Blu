import React from "react"
// Types
import type {BillInterface} from "../../../../store/bills/bills.reducer";
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
                        <StyledAmount isWithdrawal={item.isWithdrawal}>
                            <span>ریال</span>
                            <span>
                                {item.isWithdrawal ? "+" : "-"}
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
        </StyledList>
    )
}

export default List