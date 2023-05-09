import React from 'react';
import {ProfilePageType} from "../../redux/State";
import Profile from "./Profile";



type ProfilePropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    profilePage: ProfilePageType
}

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}