import React, {useRef} from "react"

interface PropsInterface {
    children: React.ReactNode
    onNext: () => void
    endMessage?: string,
    height: string
}


const InfiniteScroll: React.FC<PropsInterface> = (props) => {
    const ref = useRef<any>();

    const onEnd = () => {
        if (ref.current) {
            const {scrollTop, clientHeight, scrollHeight,} = ref.current;
            if (scrollTop + clientHeight === scrollHeight) {
                return props.onNext()
            }
        }
    };

    return (
        <div style={{height: `${props.height}`, overflowY: "auto"}}
             ref={ref}
             onScroll={onEnd}>
            {props.children}
        </div>
    )
}

export default InfiniteScroll