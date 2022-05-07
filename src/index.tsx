import React from "react"
import ReactDOM from "react-dom/client"
// Local Components
import {App} from "./app";

const htmlElement = document.getElementById("root") as HTMLHtmlElement

const root = ReactDOM.createRoot(htmlElement)

console.log(process.env.REACT_APP_BASE_URL)

root.render(<App/>)