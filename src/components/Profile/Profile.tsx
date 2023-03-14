import React, {useState} from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData";
import {PersonDataType, PostsType} from "../../redux/State";

type StateType = {
    personData : PersonDataType
    postsData : PostsType
}

type ProfilePropsType = {
    state: StateType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={cl.profile}>
            <img
                src={props.state.personData.mainImg}
                alt="главное фото" className={cl.main_img}/>
            <PersonData data={props.state.personData}/>
            <Posts postsData={props.state.postsData}/>
        </div>
    )
}
