import React from 'react';
import Profile from "./Profile";
import {CurrentProfileDomainType, ProfilePageType} from "redux/profileReducer";
import {Redirect, RouteComponentProps} from "react-router-dom";
import {AuthUserDataType} from "redux/authReducer";


type ProfilePropsType = {
    cbAddPost: (post: string) => void
    profilePage: ProfilePageType
    authData: AuthUserDataType
    // currentProfile: CurrentProfileDomainType
    setUserProfile: (userId: string) => void
    setProfileStatus: (userId: string) => void
} & RouteComponentProps<{ userId: string }>

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        const userId = this.props.match.params.userId
        const ownUserId = this.props.authData.id && this.props.authData.id.toString()
        const currentUserId = userId || ownUserId

        if (currentUserId) {
            this.props.setUserProfile(currentUserId)
            this.props.setProfileStatus(currentUserId)
        }
        else {
            return <Redirect to={'/login'}/>
            //Что бы избежать редиректов с морганием пока идет запрос authMe
            //необходимо провети инициализацию приложения в App
        }
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