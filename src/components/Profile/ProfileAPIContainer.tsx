import React from 'react';
import {ProfilePageType} from "../../redux/State";
import Profile from "./Profile";
import axios from "axios";
import {ProfileType} from "../../redux/profileReducer";



type ProfilePropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    setCurrentProfile: (profile: ProfileType) => void
    profilePage: ProfilePageType
    currentProfile: ProfileType
}

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        //запросить профиль
        const userProfile = 2
        const url = 'https://social-network.samuraijs.com/api/1.0/profile/' + userProfile


        axios.get(url)
            .then(response => {
                console.log(response)
                this.props.setCurrentProfile(response.data)
            })
        //засетать его
        //прокинуть профиль в конечную компоненту
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}