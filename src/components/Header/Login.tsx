import React from "react";
import cl from "./header.module.css";
import {NavLink} from "react-router-dom";

export type LoginPropsType = {
    isAuthorized: boolean
    login: string | null
    logOut: () => void
}

export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={cl.login}>
            {props.isAuthorized ? (
                    <>
                        <span className={cl.title}>{props.login}</span>
                        <button
                            onClick={props.logOut}
                        >Log out</button>
                    </>
                )
                :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    )
}

