import React from "react";
import cl from "./personData.module.css"
import {PersonDataType} from "../../../redux/State";
import {ProfileType} from "../../../redux/profileReducer";
import {Status} from "./Status";


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
            <h2 className={cl.name}>{fullName}</h2>
            <Status status={'test'}/>
            {/*<p className={cl.age}> {props.data.age}</p>*/}
        </div>
    )
}

