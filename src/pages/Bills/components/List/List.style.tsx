import styled from "styled-components";
// Colors
import {COLORS} from "../../../../theme/__variables";

interface PropsInterface {
    span: number
    isWithdrawal?: boolean
}

export const StyledList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const StyledBill = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.BORDER};
`


export const IsWithdrawal = styled.div<PropsInterface>`
  display: flex;
  color: ${(props: any) => props.isWithdrawal ? COLORS.DECREMENT_ARROW : COLORS.INCREMENT_ARROW};
  font-size: 12px;
`

export const StyledContent = styled.div`
  width: 100%;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;

  & > p {
    font-size: 14px;
    margin-bottom: .5rem;
  }
`

export const StyledDate = styled.div`
  font-size: 12px;
  color: ${COLORS.LIGHT_TEXT}
`

export const StyledAmount = styled.div<PropsInterface>`
  font-weight: 500;
  font-size: 14px;

  & > span {
    color: ${(props: any) => props.isWithdrawal ? COLORS.DECREMENT_ARROW : COLORS.INCREMENT_ARROW};
    margin: 0 3px;
    display: inline-block;
  }
`

export const StyledBackIcon = styled.div
    ``