import React, {SyntheticEvent} from 'react'
import ReactDOM from 'react-dom'
// Styles
import {StyledModal, StyledTitle, StyledWrapper} from "./Modal.style";
import {Maybe} from "../index";

interface PropsInterface {
    title: string
    children: React.ReactNode
    show: boolean
    close: () => void
}

const Modal: React.FC<PropsInterface> = (props) => {


    return ReactDOM.createPortal(
        <>
            <Maybe condition={props.show}>
                <StyledModal onClick={() => props.close()}>
                    <StyledWrapper onClick={(event: SyntheticEvent) => event.stopPropagation()}>
                        <StyledTitle>{props.title}</StyledTitle>
                        <div>
                            {props.children}
                        </div>
                    </StyledWrapper>
                </StyledModal>
            </Maybe>
        </>
        ,
        document.getElementById('modal') as HTMLElement)
}

export default Modal

