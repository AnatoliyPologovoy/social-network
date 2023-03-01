import React from "react";
import cl from "./header.module.css";

type DataType = {
    data? : any
}

const Header:React.FC<DataType> = () => {
    return (
        <header className={cl.header}>
            <img src="https://e7.pngegg.com/pngimages/376/174/png-clipart-phoenix-bird-cool-background-logo-fictional-character-thumbnail.png" alt="logo"/>
        </header>
    )
}

export default Header;