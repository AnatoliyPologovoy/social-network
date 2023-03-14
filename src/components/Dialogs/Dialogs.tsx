import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages";
import {DialogsDataType, MessagesDataType} from "../../redux/State";

type StateType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
}

type DialogsPropsType = {
    state: StateType
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsList = props.state.dialogsData.map((el) => {

        return (
            <NameDialogs name={el.name} id={el.id}/>
        )
    })
    const renderMessages = props.state.messagesData.map((el) => {
        return (
            <Message text={el.text}/>
        )
    })

    return (
        <div className={cl.dialogsWrapper}>
            <ul className={cl.dialogsList}>
                {dialogsList}
            </ul>
            <div className={cl.messagesWrapper}>
                <div className={cl.messagesInner}>
                    {renderMessages}
                </div>
                <div className={cl.messagesSend}>
                    //messages send area
                </div>

            </div>
        </div>
    )
}

