import React from "react";
import {changeInputMessageTextActionCreation, sendMessageActionCreation} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypeProfileAndDialogsPages, DialogsPageType, StateType} from "../../redux/State";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
    // isAuth: boolean
}

type MapDispatchToProps = {
    cbSendMessage: () => void
    changeInputMessageText: (message: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuthorized
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

// const DialogsWithAuthRedirect = WithAuthRedirect(Dialogs)

export const DialogsContainer =
    compose<React.ComponentType>(
        connect(mapStateToProps, mapDispatchToProps),
        WithAuthRedirect
    )(Dialogs)

