import React from "react";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import {StoreContext} from "../../redux/StoreContext";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    // store: StoreType
};


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const dialogsPage = store.getState().dialogsPage

                    const cbSendMessage = () => {
                        store.dispatch(sendMessageActionCreation())
                    }

                    const changeInputMessageText = (message: string) => {
                        store.dispatch(changeInputMessageTextActionCreation(message))
                    }

                    return (
                        <Dialogs dialogsPage={dialogsPage}
                                 cbSendMessage={cbSendMessage}
                                 changeInputMessageText={changeInputMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

