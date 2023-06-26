import React from 'react';
import Profile from "./Profile";
import {CurrentProfileDomainType, ProfilePageType} from "redux/profileReducer";
import {Redirect, RouteComponentProps} from "react-router-dom";


type ProfilePropsType = {
    cbAddPost: (post: string) => void
    profilePage: ProfilePageType
    // currentProfile: CurrentProfileDomainType
    setUserProfile: (userId: string) => void
    setProfileStatus: (userId: string) => void
} & RouteComponentProps<{ userId: string }>

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        const userProfile = this.props.match.params.userId
        const myUserId = '28880'

        this.props.setUserProfile(userProfile || myUserId)
        this.props.setProfileStatus(userProfile || myUserId)
    }

    //применить profileAPI.updateProfileStatus(status) для обновления статуса
    // обновить можно только свой статус
    // state.auth.data.id === profilePage.currentProfile.userId

    render() {

        return (
            <Profile {...this.props}/>
        )
    }
}