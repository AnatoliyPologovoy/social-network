import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {StoreType} from "../../redux/State";
import AddPost from "./AddPost/AddPost";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const srcImg = props.store._state.profilePage.personData.mainImg
    const personData = props.store._state.profilePage.personData
    const cbAddPost = props.store.addPost
    const changeInputPost = props.store.changeInputPostText
    const inputValue = props.store.getState().profilePage.postText
    const postsData = props.store._state.profilePage.postsData

    return (
        <div className={cl.profile}>
            <img
                src={srcImg}
                alt={'#'}
            />
            <PersonData data={personData}/>
            <AddPost cbAddPost={cbAddPost.bind(props.store)}
                     changeInputPost={changeInputPost.bind(props.store)}
                     inputValue={inputValue}
            />
            <Posts postsData={postsData}/>
        </div>
    )
}
