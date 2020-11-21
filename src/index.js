import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import OutBody from "./OutBody";
import InBody from "./InBody";

// render inside of the <body> element
ReactDOM.render(
  <React.StrictMode>
    <InBody />
  </React.StrictMode>,
  document.getElementById("root")
);

// render outside of the <body> element
const insertionPoint = document.createElement("div");
insertionPoint.id = "insertion-point";
document.body.parentNode.insertBefore(insertionPoint, document.body);
ReactDOM.render(
  <React.StrictMode>
    <OutBody />
  </React.StrictMode>, // <---- cy.contains() won't be able to locate the text in <OutBody />
  insertionPoint
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
