import React, {useState} from "react"
// Local Components
import {Modal} from "../../components";

const Bills = () => {
    const [modal, setModal] = useState(false);

    return (
        <div>
            <Modal title="HEADER" show={modal} close={() => setModal(false)}>
                <div>...</div>
            </Modal>
        </div>
    )
}

export default Bills