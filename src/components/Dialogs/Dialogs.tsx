import React from "react";
import cl from "./dialogs.module.css"
import {DialogsNames} from "./DialogsNames";
import {Messages} from "./Messages/Messages";
import SendMessage from "./SendMessage/SendMessage";
import {DialogsPageType} from "../../redux/State";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    cbSendMessage: () => void
    changeInputMessageText: (text: string) => void
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsNames = props.dialogsPage.dialogsNames
    const messages = props.dialogsPage.messagesData
    const inputValueMessage = props.dialogsPage.inputMessage

    return (
        <div className={cl.dialogsWrapper}>
            <DialogsNames dialogsNames={dialogsNames}/>
            <div className={cl.messagesWrapper}>
                <Messages messagesData={messages}/>
                <SendMessage
                    cbSendMessage={props.cbSendMessage}
                    inputValue={inputValueMessage}
                    changeInputMessageText={props.changeInputMessageText}
                />
            </div>
        </div>
    )
}



