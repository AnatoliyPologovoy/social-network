import React from "react";
import {addPostActionCreation, ProfilePageType, setProfileStatusTC, setUserProfileTC} from "../../redux/profileReducer";
import {AppStateType} from "redux/redux-store";
import {connect} from "react-redux";
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {AuthUserDataType} from "redux/authReducer";
import {getAuthData, getProfilePage} from "components/Profile/profile.selectors";


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
        profilePage: getProfilePage(state),
        authData: getAuthData(state)
        // currentProfile: state.profilePage.currentProfile,
    }
}


const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, objForMapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileAPIContainer)

export default ProfileContainer

