import React from "react";
import cl from "./header.module.css";

type DataType = {
    data? : any
}

export const Login:React.FC<DataType> = () => {
    return (
        <div className={cl.login}>
            <span>Login</span>
        </div>
    )
}

