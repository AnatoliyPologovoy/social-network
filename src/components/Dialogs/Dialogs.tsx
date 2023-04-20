import React from "react";
import cl from "./dialogs.module.css"
import {NameDialogs} from "./NameDialogs";
import {Message} from "./Messages/Messages";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import SendMessage from "./SendMessage/SendMessage";
import {StoreType} from "../../redux/State";
import {StoreContext} from "../../redux/StoreContext";

type DialogsPropsType = {
    // store: StoreType
};


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const dialogsList = store.getState().dialogsPage.dialogsData.map((el) => {
                        return (
                            <NameDialogs name={el.name} id={el.id}/>
                        )
                    })
                    const renderMessages = store.getState().dialogsPage.messagesData.messages.map((el) => {
                        return (
                            <Message message={el}
                                     users={store.getState().dialogsPage.messagesData.users}
                            />
                        )
                    })

                    const cbSendMessage = () => {
                        store.dispatch(sendMessageActionCreation())
                    }
                    const inputValueMessage = store.getState().dialogsPage.inputMessage
                    const changeInputMessageText = (message: string) => {
                        store.dispatch(changeInputMessageTextActionCreation(message))
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
            }
        </StoreContext.Consumer>
    )
}

