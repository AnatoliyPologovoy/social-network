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

const Profile: React.FC<ProfilePropsType> = ({cbAddPost, profilePage, isHostUser}) => {
    const postsData = profilePage.postsData
    const profileStatus = profilePage.status
    const currentProfile = profilePage.currentProfile

    return (
        <div>
            <div className={cl.profile}>
                <PersonData
                    isHostUser={isHostUser}
                    currentProfile={currentProfile}
                    profileStatus={profileStatus}
                />
                <AddPost
                    cbAddPost={cbAddPost}
                    userName={currentProfile.fullName}
                    isHostUser={isHostUser}
                />
                <Posts
                    smallPhoto={profilePage.currentProfile.photos.small}
                    postsData={isHostUser ? postsData : []}
                    userName={isHostUser ?  currentProfile.fullName : ''}
                />
            </div>
        </div>
    )
}

export default Profile
