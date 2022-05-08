import React, {useState} from "react";
// Components
import {Header, Modal} from "./components";

export const App: React.FC = () => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Header title="صورتحساب"/>
            <button onClick={() => setModal(true)}>Check the modal</button>

            <Modal title="HEADER" show={modal} close={() => setModal(false)}>
                <div>...</div>
            </Modal>
        </>
    )
}