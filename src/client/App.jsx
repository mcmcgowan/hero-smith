import React from "react";
import BasicInfo from "./components/BasicInfo.jsx";
import LogIn from "./components/LogIn.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () =>{
    return (
        <div>
            <NavBar />
            <h1>
                Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <LogIn />
            <BasicInfo />     
        </div>
    )
}

export default App