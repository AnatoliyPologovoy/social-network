import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages/Messages";
import {changeInputMessageTextActionCreation, sendMessageActionCreation, StoreType} from "../../redux/State";
import SendMessage from "./SendMessage/SendMessage";

type DialogsPropsType = {
    store: StoreType
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsList = props.store.getState().dialogsPage.dialogsData.map((el) => {
        return (
            <NameDialogs name={el.name} id={el.id}/>
        )
    })
    const renderMessages = props.store.getState().dialogsPage.messagesData.messages.map((el) => {
        return (
            <Message message={el}
                     users={props.store.getState().dialogsPage.messagesData.users}
            />
        )
    })

    const cbSendMessage = () => {
        props.store.dispatch(sendMessageActionCreation())
    }
    const inputValueMessage = props.store.getState().dialogsPage.inputMessage
    const changeInputMessageText = (message: string) => {
        props.store.dispatch(changeInputMessageTextActionCreation(message))
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
                    <SendMessage
                        cbSendMessage={cbSendMessage}
                        inputValue={inputValueMessage}
                        changeInputMessageText={changeInputMessageText}
                    />
                </div>

            </div>
        </div>
    )
}

