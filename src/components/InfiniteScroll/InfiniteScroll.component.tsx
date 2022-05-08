import React, {useRef, useState} from "react"
import {Spinner} from "../index";
// Styles
import {StyledEndMessage} from "./InfiniteScroll.style";

interface PropsInterface {
    children: React.ReactNode
    onNext: () => void
    endMessage: string,
    height: string,
    isEnd: boolean
}


const InfiniteScroll: React.FC<PropsInterface> = (props) => {
    const ref = useRef<any>();
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

    const onEnd = () => {
        if (ref.current) {
            const {scrollTop, clientHeight, scrollHeight,} = ref.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setIsSpinnerVisible(!isSpinnerVisible)
                return !props.isEnd && props.onNext()
            }
        }
    };

    return (
        <div style={{height: `${props.height}`, overflowY: "auto"}}
             ref={ref}
             onScroll={onEnd}>
            {props.children}
            {props.isEnd ? <StyledEndMessage>{props.endMessage}</StyledEndMessage> : <Spinner hasOverlay={false}/>}
        </div>
    )
}

export default InfiniteScroll