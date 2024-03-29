import React from 'react'
import cl from './messages.module.css'
import {
    ItemMessagesType,
    MessagesDataType,
    UsersMessagesType,
} from '../../../redux/State'

type MessagesPropsType = {
    message: ItemMessagesType
    users: UsersMessagesType
}

export const Message: React.FC<MessagesPropsType> = (props) => {
    const isHost = props.users.host.userId === props.message.userId
    const isMyOrFriend = isHost ? cl.myMessage : cl.friendMessage
    const avatar = isHost
        ? props.users.host.avatar
        : props.users.companion.avatar
    const name = isHost ? props.users.host.name : props.users.companion.name
    return (
        <div className={cl.messageWrapper}>
            <div className={cl.message + ' ' + isMyOrFriend}>
                <img className={cl.avatar} src={avatar} alt="#" />
                <div className={cl.text}>
                    <div>{name}</div>
                    {props.message.text}
                </div>
            </div>
            <div className={cl.time}>{props.message.time}</div>
        </div>
    )
}
