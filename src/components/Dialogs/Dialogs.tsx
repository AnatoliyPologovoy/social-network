import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages/Messages";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import SendMessage from "./SendMessage/SendMessage";
import {DialogsDataType, DialogsPageType, ItemMessagesType, StoreType, UsersMessagesType} from "../../redux/State";
import {StoreContext} from "../../redux/StoreContext";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    cbSendMessage: () => void
    changeInputMessageText: (text: string) => void
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsData = props.dialogsPage.dialogsData
    const messages = props.dialogsPage.messagesData.messages
    const users = props.dialogsPage.messagesData.users
    const inputValueMessage = props.dialogsPage.inputMessage

    const dialogsList = dialogsData.map((el) => {
        return (
            <NameDialogs name={el.name} id={el.id}/>
        )
    })
    const renderMessages = messages.map((el) => {
        return (
            <Message message={el}
                     users={users}
            />
        )
    })

    // const cbSendMessage = () => {
    //     store.dispatch(sendMessageActionCreation())
    // }

    // const changeInputMessageText = (message: string) => {
    //     store.dispatch(changeInputMessageTextActionCreation(message))
    // }

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
                        cbSendMessage={props.cbSendMessage}
                        inputValue={inputValueMessage}
                        changeInputMessageText={props.changeInputMessageText}
                    />
                </div>

            </div>
        </div>
    )
}



