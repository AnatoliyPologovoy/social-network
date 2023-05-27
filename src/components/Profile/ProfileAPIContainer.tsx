import React from 'react';
import {ProfilePageType} from "../../redux/State";
import Profile from "./Profile";
import {ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps} from "react-router-dom";


type ProfilePropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    profilePage: ProfilePageType
    currentProfile: ProfileType
    setUserProfile: (userId: string) => void
} & RouteComponentProps<{userId: string}>

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        const userProfile = this.props.match.params.userId
        this.props.setUserProfile(userProfile)
    }


    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}