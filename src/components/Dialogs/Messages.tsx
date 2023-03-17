import React from "react";
import cl from "./messages.module.css";
import {ItemMessagesType} from "../../redux/State";
import {message} from "antd";

type MessagePropsType = {
    messageData: ItemMessagesType
}


export const Message : React.FC<MessagePropsType> = (props) => {
    let classWrapperMessage = props.messageData.author.name === 'me' ?
        cl.messageFriend :
        cl.message
    return (
        <div className={classWrapperMessage}>
            <img src={props.messageData.author.avatar} alt="#"/>
            {props.messageData.text}
        </div>
    )
}