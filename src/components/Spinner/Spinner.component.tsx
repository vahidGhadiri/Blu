import React from "react";
// Styles
import {Container, StyledSpinner} from "./Spinner.style";


interface PropsInterface {
    hasOverlay: boolean
}

const Spinner: React.FC<PropsInterface> = (props) => {
    return (
        <Container hasOverlay={props.hasOverlay}>
            <StyledSpinner/>
        </Container>
    )
}

export default Spinner
