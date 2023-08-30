import React, {FC, useState} from 'react'
import cl from '../personData.module.css'
import {ProfileDomainType} from 'redux/profileReducer'
import {ProfileShow} from '../ProfileShow/ProfileShow'
import {ProfileEditForm} from '../ProfileEditForm/ProfileEditForm'

type PropsType = {
    currentProfile: ProfileDomainType
    isHostUser: boolean
}

const ProfileAboutMe: FC<PropsType> = ({currentProfile, isHostUser}) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => setEditMode((prevState) => !prevState)

    return (
        <div className={cl.aboutMeWrapper}>
            {editMode ? (
                <ProfileEditForm
                    currentProfile={currentProfile}
                    toggleEditMode={toggleEditMode}
                />
            ) : (
                <ProfileShow
                    currentProfile={currentProfile}
                    isHostUser={isHostUser}
                    toggleEditMode={toggleEditMode}
                />
            )}
        </div>
    )
}

export default ProfileAboutMe
