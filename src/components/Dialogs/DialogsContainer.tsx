import React from "react";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, DialogsPageType, StateType} from "../../redux/State";
import {AppStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
    cbSendMessage: () => void
    changeInputMessageText: (message: string) => void
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToProps => {
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

