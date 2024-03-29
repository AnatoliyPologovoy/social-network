import React, {FC} from 'react'
import cl from '../personData.module.css'
import {
    ProfileDomainType,
    SocialProfile,
} from 'redux/profileReducer'
import {ReactComponent as EditIcon} from '../../../../assets/edit-btn.svg'

type PropsType = {
    currentProfile: ProfileDomainType
    isHostUser: boolean
    toggleEditMode: () => void
}

export const ProfileShow: FC<PropsType> = ({
    currentProfile,
    isHostUser,
    toggleEditMode,
}) => {
    return (
        <>
            {isHostUser && (
                <EditIcon
                    className={cl.statusIcon + ' ' + cl.aboutMeIcon}
                    onClick={toggleEditMode}
                />
            )}
            <div>
                <b>About me:</b>
                <span>{currentProfile.aboutMe}</span>
            </div>
            {currentProfile.lookingForAJob && (
                <div>
                    <b>Looking for a job:</b>
                    <span>{currentProfile.lookingForAJobDescription}</span>
                </div>
            )}
            <div className={cl.contacts}>
                {Object.keys(currentProfile.contacts).map((key, i) => {
                    let link = currentProfile.contacts[
                        key as keyof SocialProfile
                        ] || '#'
                    if (!link.includes('http') && link !== '#') {
                        link = 'http://' + link
                    }
                    return (
                        <div key={i} className={cl.contactsItem}>
                            <b>{key}:</b>
                            <a
                                className={cl.contactsValue}
                                href={link}
                                target={'_blank'}
                            >
                                {
                                    currentProfile.contacts[
                                        key as keyof SocialProfile
                                    ]
                                }
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
