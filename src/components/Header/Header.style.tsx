import styled from "styled-components"
// Root Variables
import {COLORS} from "../../theme/__variables";

export const StyledHeader = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  color: white;
  padding: 2rem 1rem;
  border-radius: 0 0 2rem 2rem;
  background-color: ${COLORS.BLUE_DARKER};
  
`


export const StyledTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const StyledBackIcon = styled.div`
  display: flex;
`


export const StyledWrapper = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-between;
  align-items: center;
  
  & > span {
    display: flex;
  }
`