import React from 'react'
import cl from './header.module.css'
import {NavLink} from 'react-router-dom'
import {LoginOutlined} from '@ant-design/icons'
import Button from 'antd/lib/button'

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
                    <Button onClick={props.logOut} icon={<LoginOutlined rev={null} />}>Log out</Button>
                </>
            ) : (
                <NavLink to={'/login'}>Login</NavLink>
            )}
        </div>
    )
}
