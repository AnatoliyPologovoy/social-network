import {ActionChangeInputMessageType, ActionSendMessage, ActionTypes, DialogsPageType} from "./State";

const changeInputMessageText = 'CHANGE-INPUT-MESSAGE-TEXT'
const sendMessage = 'SEND-MESSAGE'

let initialState: DialogsPageType = {
    dialogsNames: [
        {
            id: 1,
            name: 'Valeria',
        },
        {
            id: 2,
            name: 'Roman',
        },
        {
            id: 3,
            name: 'Andrey',
        },
        {
            id: 4,
            name: 'Kostya',
        }
    ],
    inputMessage: '',
    messagesData: {
        users: {
            host: {
                id: 1,
                userId: 111,
                name: 'Anatoliy',
                avatar: "https://i.pravatar.cc/30?u=fake@pravatar.com"
            },
            companion: {
                id: 2,
                userId: 222,
                name: 'Valeria',
                avatar: 'https://i.pravatar.cc/30'
            }
        },
        messages: [
            {
                id: 1,
                userId: 222,
                text: 'hello',
                time: '22:00'
            },
            {
                id: 2,
                userId: 111,
                text: 'hi',
                time: '22:01'
            },
            {
                id: 3,
                userId: 222,
                text: 'how are you',
                time: '22:02'
            },
            {
                id: 4,
                userId: 111,
                text: 'i am fine',
                time: '22:03'
            }
        ]
    }
}

export const dialogsReducer =
    (state: DialogsPageType = initialState, action: ActionTypes):DialogsPageType => {
        switch (action.type) {
            case "SEND-MESSAGE":
                const messages = state.messagesData.messages
                const newMessage = {
                    id: messages[messages.length - 1].id + 1,
                    userId: state.messagesData.users.host.userId,
                    text: state.inputMessage,
                    time: new Date().toLocaleTimeString().slice(0, -3)
                }
                state.inputMessage = '' //cleaning textarea after send
                state.messagesData.messages.push(newMessage)
                return state
            case "CHANGE-INPUT-MESSAGE-TEXT":
                state.inputMessage = action.text
                return state
            default:
                return state
        }
    }

export const changeInputMessageTextActionCreation =
    (message: string): ActionChangeInputMessageType => {
        return {
            type: changeInputMessageText,
            text: message
        }
    }
export const sendMessageActionCreation =
    ():ActionSendMessage => ({type: sendMessage})

