import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages/Messages";
import {StoreType} from "../../redux/State";
import SendMessage from "./SendMessage/SendMessage";

type DialogsPropsType = {
    store: StoreType
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsList = props.store._state.dialogsPage.dialogsData.map((el) => {
        return (
            <NameDialogs name={el.name} id={el.id}/>
        )
    })
    const renderMessages = props.store._state.dialogsPage.messagesData.messages.map((el) => {
        return (
            <Message message={el}
                     users={props.store._state.dialogsPage.messagesData.users}
            />
        )
    })

    const cbSendMessage = (message: string) => {
        props.store.sendMessage(message)
    }


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
                    <SendMessage cbSendMessage={cbSendMessage}/>
                </div>

            </div>
        </div>
    )
}

