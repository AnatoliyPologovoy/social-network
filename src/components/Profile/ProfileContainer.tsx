import React from "react";
import {ProfilePageType} from "../../redux/State";
import {
    addPostActionCreation,
    changeInputPostTextActionCreation,
    ProfileType,
    setUserProfileTC
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


type MapStateToProps = {
    profilePage: ProfilePageType
    currentProfile: ProfileType
}

type MapDispatchToPropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    setUserProfile: (userId: string) => void
}


const objForMapDispatchToProps: MapDispatchToPropsType = {
    cbAddPost: addPostActionCreation,
    cbChangeInputPost: changeInputPostTextActionCreation,
    setUserProfile: setUserProfileTC
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
        currentProfile: state.profilePage.currentProfile,
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, objForMapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileAPIContainer)

