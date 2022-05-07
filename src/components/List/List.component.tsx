import React from "react"
// Types
import type {BillInterface} from "../../store/bills/bills.reducer";

interface PropsInterface {
    data: Array<BillInterface>
}

const List: React.FC<PropsInterface> = (props) => {
    return (
        <div>
            {props.data.map((item, index) => (
                <div>
                    {item.amount}
                </div>
            ))}
        </div>
    )
}

export default List