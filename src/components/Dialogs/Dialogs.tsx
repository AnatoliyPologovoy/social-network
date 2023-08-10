import React from 'react'
import cl from './dialogs.module.css'
import {DialogsNames} from './DialogsNames'
import {Messages} from './Messages/Messages'
import SendMessage from './SendMessage/SendMessage'
import {DialogsPageType} from '../../redux/State'
import {Redirect} from 'react-router-dom'

type DialogsPropsType = {
    // isAuth: boolean
    dialogsPage: DialogsPageType
    cbSendMessage: () => void
    changeInputMessageText: (text: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const dialogsNames = props.dialogsPage.dialogsNames
    const messages = props.dialogsPage.messagesData
    const inputValueMessage = props.dialogsPage.inputMessage
    //
    // if (!props.isAuth) {
    //     return <Redirect to={'/login'}/>
    // }
    return (
        <div className={cl.dialogsWrapper}>
            <DialogsNames dialogsNames={dialogsNames} />
            <div className={cl.messagesWrapper}>
                <Messages messagesData={messages} />
                <SendMessage
                    cbSendMessage={props.cbSendMessage}
                    inputValue={inputValueMessage}
                    changeInputMessageText={props.changeInputMessageText}
                />
            </div>
        </div>
    )
}
