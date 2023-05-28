import React from "react";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypeProfileAndDialogsPages, DialogsPageType, StateType} from "../../redux/State";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchToProps = {
    cbSendMessage: () => void
    changeInputMessageText: (message: string) => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuthorized
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypeProfileAndDialogsPages) => void): MapDispatchToProps => {
    return {
        cbSendMessage: () => {
            dispatch(sendMessageActionCreation())
        },
        changeInputMessageText: (message) => {
            dispatch(changeInputMessageTextActionCreation(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

