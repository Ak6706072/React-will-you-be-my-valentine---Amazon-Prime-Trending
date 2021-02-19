import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import slides from "./data.js";
console.log(slides);
ReactDOM.render(<App slides={slides} />, document.getElementById("root"));
