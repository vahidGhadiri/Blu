import React, {useRef, useState} from "react"
import {Maybe, Spinner} from "../index";

interface PropsInterface {
    children: React.ReactNode
    onNext: () => void
    endMessage?: string,
    height: string
}


const InfiniteScroll: React.FC<PropsInterface> = (props) => {
    const ref = useRef<any>();
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

    const onEnd = () => {
        if (ref.current) {
            const {scrollTop, clientHeight, scrollHeight,} = ref.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setIsSpinnerVisible(!isSpinnerVisible)
                return props.onNext()
            }
        }
    };

    return (
        <div style={{height: `${props.height}`, overflowY: "auto"}}
             ref={ref}
             onScroll={onEnd}>
            {props.children}
            <Maybe condition={isSpinnerVisible}>
                <Spinner hasOverlay={false}/>
            </Maybe>
        </div>
    )
}

export default InfiniteScroll