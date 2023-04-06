import {ActionChangeInputMessageType, ActionSendMessage, ActionTypes, DialogsPageType} from "./State";

const changeInputMessageText = 'CHANGE-INPUT-MESSAGE-TEXT'
const sendMessage = 'SEND-MESSAGE'

export const dialogsReducer =
    (state: DialogsPageType, action: ActionTypes) => {
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

