import styled, {keyframes} from 'styled-components'

interface PropsInterface {
    hasOverlay: boolean
}

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Container = styled.div<PropsInterface>`
  height: ${(props) => props.hasOverlay && "100vh"};
  display: grid;
  place-content: center;
  margin: 0 auto;
  padding: 1rem;
`

export const StyledSpinner = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${SpinAnimation} 0.6s linear infinite;
`