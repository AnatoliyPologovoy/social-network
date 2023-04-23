import React from "react";
import {ActionTypes, ProfilePageType} from "../../redux/State";
import {addPostActionCreation, changeInputPostTextActionCreation} from "../../redux/profileReducer";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStateToProps = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
}

const MapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToPropsType => {
    return {
        cbAddPost: () => {
            dispatch(addPostActionCreation())
        },
        cbChangeInputPost: (text) => {
            dispatch(changeInputPostTextActionCreation(text))
        }
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}

export const ProfileContainer = connect(mapStateToProps, MapDispatchToProps)(Profile)

