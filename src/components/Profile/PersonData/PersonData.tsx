import React, {ChangeEvent, useState} from "react";
import cl from "./personData.module.css"
import {
    CurrentProfileDomainType,
    SocialProfile,
    updateProfilePhotoTC,
    updateUserProfileStatusTC
} from "redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import avatarPlaceholder from "assets/avatar_placeholder.png"
import {useDispatch} from "react-redux";
import {ReactComponent as UpdateIcon} from "assets/update-photo.svg";
import {ReactComponent as EditIcon} from "assets/edit-btn.svg"
import {ReactComponent as SaveIcon} from "assets/ok-btn.svg"
import ProfileAboutMe from "../ProfileAboutMe/ProfileAboutMe";


type PersonDataPropsType = {
    isHostUser: boolean
    currentProfile: CurrentProfileDomainType,
    profileStatus: string
}


export const PersonData: React.FC<PersonDataPropsType> = (props) => {
    const {isHostUser,profileStatus, currentProfile } = props


    const dispatch = useDispatch()

    const updateStatus = (status: string) => {
        dispatch(updateUserProfileStatusTC(status))
    }

    const updatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            dispatch(updateProfilePhotoTC(e.currentTarget.files[0]))
        }
    }
    const srcImg = currentProfile.photos.large ?
        currentProfile.photos.large : avatarPlaceholder

    const fullName = currentProfile ? currentProfile.fullName : 'null'

    const uploadPhotoIcon =
        <>
            <input type={"file"}
                   className={cl.inputFile}
                   value={''}
                   id={'input-file'}
                   onChange={updatePhoto}
            />
            <label htmlFor={'input-file'}
                   className={cl.inputFileLabel}>
                <UpdateIcon
                    className={cl.updatePhotoIcon}/>
            </label>
        </>

    return (
        <div className={cl.personData}>
            <img
                className={cl.imgAvatar}
                src={srcImg}
                alt={"аватарка пользователя " + currentProfile?.fullName}
            />
            {isHostUser && uploadPhotoIcon}
            <div className={cl.profileWrapper}>
                <h2 className={cl.name}>{fullName}</h2>
                <ProfileStatus
                    isHostUser={isHostUser}
                    status={profileStatus}
                    updateStatus={updateStatus}
                />
                <ProfileAboutMe currentProfile={currentProfile}/>
            </div>
        </div>
    )
}

