import React from "react"

interface PropsInterface {
    children: React.ReactNode
    condition: boolean
}

const Maybe: React.FC<PropsInterface> = (props) => {
    return (
        <>
            {props.condition ? props.children : null}
        </>
    )
}

export default Maybe