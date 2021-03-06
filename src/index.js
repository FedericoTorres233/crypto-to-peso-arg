import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css"

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));


reportWebVitals(console.log());
