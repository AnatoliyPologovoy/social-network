import React from "react";
import cl from "./messages.module.css";

type MessagePropsType = {
    text : string
}

export const Message : React.FC<MessagePropsType> = (props) => {
    return (
        <div className={cl.message}>
            {props.text}
        </div>
    )
}