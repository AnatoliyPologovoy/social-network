import React from "react";
import cl from "./sidebar.module.css";
import {NavLink} from "react-router-dom";

// type clType =

type DataType = {
    data?: any
}

export const Sidebar: React.FC<DataType> = (props) => {
    return (
        <div className={cl.sidebar}>
            <ul>
                <li><NavLink to="/news" activeClassName={cl.active} >News</NavLink></li>
                <li><NavLink to="/dialogs">Messages</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </div>
    )
}

//className={navData => navData.isActive ? cl.active : cl.item }