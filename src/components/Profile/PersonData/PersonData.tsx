import React from "react";
import cl from "./personData.module.css"
import {CurrentProfileDomainType, PersonDataType} from "redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import avatarPlaceholder from "assets/avatar_placeholder.png"


type PersonDataPropsType = {
    // data: PersonDataType,
    currentProfile: CurrentProfileDomainType,
    profileStatus: string
}


export const PersonData: React.FC<PersonDataPropsType> = (props) => {
    // const isCurrentProfile = !!props.currentProfile
    const srcImg = props.currentProfile?.photos?.large ?
        props.currentProfile.photos.large : avatarPlaceholder

    const fullName = props.currentProfile ? props.currentProfile.fullName : 'null'
    return (
        <div className={cl.personData}>
            <img
                className={cl.imgAvatar}
                src={srcImg}
                alt={"аватарка пользователя " + props.currentProfile?.fullName}/>
            <div className={cl.nameWrapper}>
                <h2 className={cl.name}>{fullName}</h2>
                <ProfileStatus status={props.profileStatus}/>
            </div>
            {/*<p className={cl.age}> {props.data.age}</p>*/}
        </div>
    )
}

