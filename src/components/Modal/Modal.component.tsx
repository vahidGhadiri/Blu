import React, {SyntheticEvent} from 'react'
import ReactDOM from 'react-dom'
// Styles
import {StyledModal, StyledWrapper} from "./Modal.style";
// Local Components
import {Maybe} from "../index";

interface PropsInterface {
    children: React.ReactNode
    show: boolean
    close: () => void
}

const Modal: React.FC<PropsInterface> = (props) => {


    return ReactDOM.createPortal(
            <Maybe condition={props.show}>
                <StyledModal onClick={() => props.close()}>
                    <StyledWrapper onClick={(event: SyntheticEvent) => event.stopPropagation()}>
                            {props.children}
                    </StyledWrapper>
                </StyledModal>
            </Maybe>
        ,
        document.getElementById('modal') as HTMLElement)
}

export default Modal

