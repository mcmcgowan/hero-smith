import React from "react";
import BasicInfo from "./components/BasicInfo.jsx";
import LogIn from "./components/LogIn.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () =>{
    return (
        <div>
            <NavBar />
            <br />
            <LogIn />
            <br />
            <BasicInfo />     
        </div>
    )
}

export default App