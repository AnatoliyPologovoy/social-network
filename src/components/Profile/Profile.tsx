import React, {useState} from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {PersonDataType, PostsType} from "../../redux/State";
import AddPost from "./AddPost/AddPost";

type StateType = {
    personData : PersonDataType
    postsData : PostsType
}

type ProfilePropsType = {
    state: StateType
    cbAddPost: (post:string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={cl.profile}>
            <img
                src={props.state.personData.mainImg}
                alt="главное фото" className={cl.main_img}/>
            <PersonData data={props.state.personData}/>
            <AddPost cbAddPost={props.cbAddPost}/>
            <Posts postsData={props.state.postsData}/>
        </div>
    )
}
