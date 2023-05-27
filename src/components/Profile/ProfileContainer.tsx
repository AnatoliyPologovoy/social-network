import React from "react";
import {ActionsTypeProfileAndDialogsPages, ProfilePageType} from "../../redux/State";
import {
    addPostActionCreation,
    changeInputPostTextActionCreation,
    ProfileType,
    setCurrenProfileAC
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {withRouter} from "react-router-dom";

type MapStateToProps = {
    profilePage: ProfilePageType
    currentProfile: ProfileType
}

type MapDispatchToPropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    setCurrentProfile: (profile: ProfileType) => void
}

const MapDispatchToProps = (dispatch: (action: ActionsTypeProfileAndDialogsPages) => void): MapDispatchToPropsType => {
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

const ProfileWithUrlData = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, MapDispatchToProps)(ProfileWithUrlData)

