import React, {useState} from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData";
import {PersonDataType, PostsType} from "../../redux/State";

type ProfilePropsType = {
    personData : PersonDataType
    postsData : PostsType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={cl.profile}>
            <img
                src="https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
                alt="главное фото" className={cl.main_img}/>
            <PersonData data={props.personData}/>

            <Posts postsData={props.postsData}/>
        </div>
    )
}
