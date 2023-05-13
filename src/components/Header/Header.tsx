import React from "react";
import cl from "./header.module.css";
import logo from "../../img/inheat-logo.png";
import {Login} from "./Login";

type DataType = {
    data? : any
}

const Header:React.FC<DataType> = () => {
    return (
        <header className={cl.header}>
            <img src={logo} alt="logo"/>
            <Login/>
        </header>
    )
}

export default Header;