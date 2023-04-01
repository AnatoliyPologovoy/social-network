import React from "react";
import cl from "./sidebar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsBar} from "./Friends/FriendsBar";
import {FriendType} from "../../redux/State";

type SidebarPropsType = {
    friends: FriendType[]
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <div className={cl.sidebar}>
            <ul>
                <li><NavLink to="/news" activeClassName={cl.active} >News</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={cl.active}>Messages</NavLink></li>
                <li><NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink></li>
                <li><NavLink to="/music" activeClassName={cl.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={cl.active}>Settings</NavLink></li>
            </ul>
            <FriendsBar friends={props.friends}/>
        </div>
    )
}

//className={navData => navData.isActive ? cl.active : cl.item }