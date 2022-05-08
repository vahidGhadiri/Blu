import React from "react";
// Components
import {Header} from "./components";
// Pages
import {Bills} from "./pages";

export const App: React.FC = () => {
    return (
        <>
            <Header title="صورتحساب"/>
            <Bills/>
        </>
    )
}