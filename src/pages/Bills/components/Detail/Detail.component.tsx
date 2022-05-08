import React from "react";
// Styles
import {StyledContent, StyledDetail, StyledHeader, StyledValue} from "./Detail.style";
// Helpers
import {
    convertEnglishNumberToPersian,
    convertGregorianToPersian,
    convertNumberToCashFormat
} from "../../../../utils/helpers/function";

interface PropsInterface {
    amount: number
    trackingCode: number
    referenceNumber: string
    date: string
}

export const Detail: React.FC<PropsInterface> = (props) => {
    return (
        <StyledDetail>
            <StyledHeader>
                <div>
                    <h3>ریال</h3>
                    <h3>{convertNumberToCashFormat(props.amount)}</h3>
                </div>
                <p>مبلغ</p>
            </StyledHeader>

            <StyledContent>
                <StyledValue>{convertGregorianToPersian(props.date)}</StyledValue>
                <p>زمان</p>
            </StyledContent>

            <StyledContent>
                <StyledValue>{convertEnglishNumberToPersian(props.trackingCode)}</StyledValue>
                <p>شماره پیگیری</p>
            </StyledContent>

            <StyledContent>
                <StyledValue>{props.referenceNumber}</StyledValue>
                <p>شماره مرجع</p>
            </StyledContent>

        </StyledDetail>
    )
}