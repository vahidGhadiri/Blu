import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux";
// Local Components
import {App} from "./App";
//Store
import {store} from "./store";

const htmlElement = document.getElementById("root") as HTMLHtmlElement

const root = ReactDOM.createRoot(htmlElement)

const compactApp = (
    <Provider store={store}>
        <App/>
    </Provider>
)

root.render(compactApp)