import styled from "styled-components";
import {COLORS} from "../../../../theme/__variables";

export const StyledDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 2rem 1rem;
  overflow: scroll;
`
export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  & > div {
    display: flex;

    & > h3 {
      margin-right: 5px;
    }
  }

  & > p {
    font-size: 13px;
    color: ${COLORS.LIGHT_TEXT};
  }
`
export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &:not(:nth-last-of-type(1)) {
    border-bottom: 1px solid ${COLORS.BORDER};
  }


  & > span {
    display: inline-block;
  }

  & > p {
    font-size: 13px;
    color: ${COLORS.DARK_TEXT};
  }
`

export const StyledValue = styled.span`
  font-size: 13px;
  color: ${COLORS.SIMPLE_BLACK}
`