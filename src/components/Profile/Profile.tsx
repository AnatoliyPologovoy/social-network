import React from 'react'
import cl from './profile.module.css'
import {PersonData} from './PersonData/PersonData'
import {Posts} from './Posts/Posts'
import {ProfilePageType} from 'redux/profileReducer'
import {AddPost} from './AddPost/AddPost'

type ProfilePropsType = {
    cbAddPost: (post: string) => void
    profilePage: ProfilePageType
    isHostUser: boolean
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const postsData = props.profilePage.postsData
    const profileStatus = props.profilePage.status
    const currentProfile = props.profilePage.currentProfile

    return (
        <div>
            <div className={cl.profile}>
                <PersonData
                    isHostUser={props.isHostUser}
                    currentProfile={currentProfile}
                    profileStatus={profileStatus}
                />
                <AddPost cbAddPost={props.cbAddPost} />
                <Posts
                    smallPhoto={props.profilePage.currentProfile.photos.small}
                    postsData={postsData}
                />
            </div>
        </div>
    )
}

export default Profile
