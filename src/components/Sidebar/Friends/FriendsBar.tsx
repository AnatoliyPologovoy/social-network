import React from "react";
import cl from "./friendsBar.module.css"
import {FriendType} from "../../../redux/State";

type FriendsBarPropsType = {
    friends: FriendType[]
}

export const FriendsBar: React.FC<FriendsBarPropsType> = (props) => {
    const renderFriendList = props.friends.map(f => {
        return (
            <li key={f.id}>
                <img
                    src={f.avatar}
                    alt={'avatar ' + f.name}
                    className={cl.avatarPic}
                />
                <span className={cl.name}>{f.name}</span>
            </li>
        )
    })
    return (
        <div className={cl.wrapper}>
            <span>Друзья</span>
            <ul className={cl.friendsList}>
                {renderFriendList}
            </ul>
        </div>
    )
}