import React from "react";
import cl from "./header.module.css";
import {NavLink} from "react-router-dom";

export type LoginPropsType = {
    isAuthorized: boolean
    login: string | null
}

export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={cl.login}>
            {props.isAuthorized ?
                <span>{props.login}</span>
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    )
}

