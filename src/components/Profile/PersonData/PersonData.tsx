import React from "react";
import cl from "./personData.module.css"
import {PersonDataType} from "../../../redux/State";
import {ProfileType} from "../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";


type PersonDataPropsType = {
    data: PersonDataType,
    currentProfile: ProfileType
}


export const PersonData: React.FC<PersonDataPropsType> = (props) => {
    // const isCurrentProfile = !!props.currentProfile

    const srcImg = props.currentProfile?.photos?.large ?
        props.currentProfile.photos.large : props.data.avatar

    const fullName = props.currentProfile ? props.currentProfile.fullName : props.data.name
    return (
        <div className={cl.personData}>
            <img
                className={cl.imgAvatar}
                src={srcImg}
                alt={"аватарка пользователя " + props.data.name}/>
            <div className={cl.nameWrapper}>
                <h2 className={cl.name}>{fullName}</h2>
                <ProfileStatus status={'test'}/>
            </div>
            {/*<p className={cl.age}> {props.data.age}</p>*/}
        </div>
    )
}

