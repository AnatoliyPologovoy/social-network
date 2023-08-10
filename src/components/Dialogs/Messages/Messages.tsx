import React from 'react'
import {MessagesDataType} from '../../../redux/State'
import {Message} from './Message'
import cl from '../dialogs.module.css'

type MessagesPropsType = {
    messagesData: MessagesDataType
}

export const Messages: React.FC<MessagesPropsType> = (props) => {
    const messages = props.messagesData.messages
    const users = props.messagesData.users

    const renderMessages = messages.map((el) => {
        return <Message message={el} users={users} key={el.id} />
    })

    return <div className={cl.messages}>{renderMessages}</div>
}
