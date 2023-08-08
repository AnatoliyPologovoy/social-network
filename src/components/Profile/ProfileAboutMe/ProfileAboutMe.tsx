import React, {FC, useState} from 'react';
import cl from "../PersonData/personData.module.css";
import {ReactComponent as EditIcon} from "../../../assets/edit-btn.svg";
import {CurrentProfileDomainType, SocialProfile} from "../../../redux/profileReducer";

type PropsType = {
    currentProfile: CurrentProfileDomainType
}

const ProfileAboutMe: FC<PropsType> = ({currentProfile}) => {
    const [editMode, setEditMode] = useState(false)

    return <div className={cl.aboutMeWrapper}>
        {!editMode && <EditIcon className={cl.statusIcon + ' ' + cl.aboutMeIcon}/>}
        <div>
            <b>About me:</b>
            <span>{currentProfile.aboutMe}</span>
        </div>
        {currentProfile.lookingForAJob &&
            <div>
                <b>Looking for a job:</b>
                <span>{currentProfile.lookingForAJobDescription}</span>
            </div>
        }
        <div className={cl.contacts}>
            {Object.keys(currentProfile.contacts).map((key, i) => {
                return <div key={i} className={cl.contactsItem}>
                    <b>{key}:</b>
                    <span className={cl.contactsValue}>{currentProfile.contacts[key as keyof SocialProfile]}</span>
                </div>
            })}
        </div>
    </div>
}

export default ProfileAboutMe;