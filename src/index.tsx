import React from "react"
import ReactDOM from "react-dom/client"
// Local Components
import {App} from "./app";

const htmlElement = document.getElementById("root") as HTMLHtmlElement

const root = ReactDOM.createRoot(htmlElement)

root.render(<App/>)