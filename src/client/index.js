import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"
import "./styles/main.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = 'Just a change';
//     const icon = new Image()
//     icon.src = jsIcon;

//     element.appendChild(icon)
//     return element;
//   }
  
//   document.body.appendChild(component());