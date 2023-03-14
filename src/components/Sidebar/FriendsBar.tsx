import React from "react";
import cl from "./friendsBar.module.css"

export const FriendsBar: React.FC = () => {
    return (
        <div className={cl.wrapper}>
            <span>Друзья</span>
            <ul className={cl.friendsList}>
                список друзей
            </ul>
        </div>
    )
}