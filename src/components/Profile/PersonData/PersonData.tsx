import React, {ChangeEvent} from "react";
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
import {ReactComponent as UpdateIcon} from "assets/update-photo.svg"


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
    console.log(Object.keys(currentProfile.contacts))
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
                <div className={cl.aboutMeWrapper}>
                    <div>
                        <b>About me:</b>
                        <span>{currentProfile.aboutMe}</span>
                    </div>
                    {currentProfile.lookingForAJob &&
                        <div>
                            <b>Looking for a job</b>
                            <span>{currentProfile.lookingForAJobDescription}</span>
                        </div>
                    }
                    <div className={cl.contacts}>
                        {Object.keys(currentProfile.contacts).map(key => {
                            return <div>
                                <b>{key}</b>
                                <span>{currentProfile.contacts[key as keyof SocialProfile]}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

