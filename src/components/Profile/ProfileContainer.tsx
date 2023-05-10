import React from "react";
import {ActionTypes, ProfilePageType} from "../../redux/State";
import {
    addPostActionCreation,
    changeInputPostTextActionCreation,
    ProfileType,
    setCurrenProfileAC
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileAPIContainer} from "./ProfileAPIContainer";

type MapStateToProps = {
    profilePage: ProfilePageType
    currentProfile: ProfileType
}

type MapDispatchToPropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    setCurrentProfile: (profile: ProfileType) => void
}

const MapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchToPropsType => {
    return {
        cbAddPost: () => {
            dispatch(addPostActionCreation())
        },
        cbChangeInputPost: (text) => {
            dispatch(changeInputPostTextActionCreation(text))
        },
        setCurrentProfile: (profile) => {
            dispatch(setCurrenProfileAC(profile))
        }
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
        currentProfile: state.profilePage.currentProfile
    }
}

export const ProfileContainer = connect(mapStateToProps, MapDispatchToProps)(ProfileAPIContainer)

