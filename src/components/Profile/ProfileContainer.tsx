import React from "react";
import {addPostActionCreation, ProfilePageType, setProfileStatusTC, setUserProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "redux/redux-store";
import {connect} from "react-redux";
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {AuthUserDataType} from "redux/authReducer";


type MapStateToProps = {
    profilePage: ProfilePageType
    authData: AuthUserDataType
    // currentProfile: CurrentProfileDomainType
}

type MapDispatchToPropsType = {
    cbAddPost: (post: string) => void
    setUserProfile: (userId: string) => void
    setProfileStatus: (userId: string) => void
}


const objForMapDispatchToProps: MapDispatchToPropsType = {
    cbAddPost: addPostActionCreation,
    setUserProfile: setUserProfileTC,
    setProfileStatus: setProfileStatusTC

}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage,
        authData: state.auth.data
        // currentProfile: state.profilePage.currentProfile,
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, objForMapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileAPIContainer)

