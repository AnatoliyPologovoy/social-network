import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages/Messages";
import {DialogsDataType, MessagesDataType, UsersMessagesType} from "../../redux/State";
import SendMessage from "./SendMessage/SendMessage";


type StateType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
}

type DialogsPropsType = {
    state: StateType
    cbSendMessage: (message: string, hostUserId: number) => void
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsList = props.state.dialogsData.map((el) => {
        return (
            <NameDialogs name={el.name} id={el.id}/>
        )
    })
    const renderMessages = props.state.messagesData.messages.map((el) => {
        return (
            <Message message={el}
                     users={props.state.messagesData.users}
            />
        )
    })

    const cbSendMessage = (message: string) => {
        const hostUserId = props.state.messagesData.users.host.userId
        props.cbSendMessage(message,hostUserId)
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

