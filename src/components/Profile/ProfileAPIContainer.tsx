import React from 'react';
import {ProfilePageType} from "../../redux/State";
import Profile from "./Profile";
import axios from "axios";
import {ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps} from "react-router-dom";


type ProfilePropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    setCurrentProfile: (profile: ProfileType) => void
    profilePage: ProfilePageType
    currentProfile: ProfileType
} & RouteComponentProps<{userId: string}>

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() { // get profile data and set it on state
        console.log(this.props.match.params.userId)
        const userProfile = this.props.match.params.userId
        const url = 'https://social-network.samuraijs.com/api/1.0/profile/' + userProfile
        axios.get(url)
            .then(response => {
                console.log(response)
                this.props.setCurrentProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}