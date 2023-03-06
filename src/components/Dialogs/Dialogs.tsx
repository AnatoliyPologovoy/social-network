import React from "react";
import cl from "./dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={cl.dialogsWrapper}>
            <ul className={cl.dialogsList}>
                <li>Valeria</li>
                <li>Roman</li>
                <li>Andrey</li>
                <li>Kostya</li>
            </ul>
            <div className={cl.messagesWrapper}>
                <div className={cl.messagesInner}>
                    <div className={cl.message}>hi</div>
                    <div className={cl.messageFriend}>hi</div>
                    <div className={cl.messageFriend}>how are you</div>
                </div>
                <div className={cl.messagesSend}>
                    //messages send area
                </div>

            </div>
        </div>
    )
}