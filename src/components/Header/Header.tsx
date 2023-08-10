import React from 'react'
import cl from './header.module.css'
import logo from '../../img/inheat-logo.png'
import LoginContainer from './LoginContainer'

type DataType = {
    data?: any
}

const Header: React.FC<DataType> = () => {
    return (
        <header className={cl.header}>
            <img src={logo} alt="logo" />
            <LoginContainer />
        </header>
    )
}

export default Header
