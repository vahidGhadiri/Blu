import styled, {keyframes} from "styled-components"
// Root variables
import {COLORS} from "../../theme/__variables";

interface PropsInterface {
    isModalOpen: boolean
}

export const StyledModal = styled.div<PropsInterface>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`

const fadeAnimation = keyframes`
  0% {
    transform: translateY(60px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const StyledWrapper = styled.div`
  width: 90%;
  height: 40%;
  border-radius: 1rem;
  background-color: ${COLORS.WHITE};
  transition: all .5s ease-in-out;

  animation-name: ${fadeAnimation};
  animation-duration: 1s;
`

