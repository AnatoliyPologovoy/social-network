import React from "react";
import cl from "./messages.module.css";
import {ItemMessagesType} from "../../../redux/State";
import {message} from "antd";

type MessagePropsType = {
    messageData: ItemMessagesType
}


export const Message : React.FC<MessagePropsType> = (props) => {
    let isMyOrFriend = props.messageData.author.name === 'me' ?
        cl.myMessage :
        cl.friendMessage
    return (
        <div className={cl.messageWrapper}>
            <div className={cl.message + ' ' + isMyOrFriend}>
                <img className={cl.avatar} src={props.messageData.author.avatar} alt="#"/>
                <div className={cl.text}>{props.messageData.text}</div>
            </div>
            <div className={cl.time}>{props.messageData.time}</div>
        </div>

    )
}