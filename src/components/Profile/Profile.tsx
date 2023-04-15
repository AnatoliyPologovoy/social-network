import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {StoreType} from "../../redux/State";
import AddPost from "./AddPost/AddPost";
import {addPostActionCreation, changeInputPostTextActionCreation} from "../../redux/profileReducer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const srcImg = props.store.getState().profilePage.personData.mainImg
    const personData = props.store.getState().profilePage.personData

    const cbAddPost = () => props.store.dispatch(addPostActionCreation())
    const cbChangeInputPost = (text: string) => {
        return props.store.dispatch(changeInputPostTextActionCreation(text))
    }

    const inputValue = props.store.getState().profilePage.postText
    const postsData = props.store.getState().profilePage.postsData

    return (
        <div className={cl.profile}>
            <img
                src={srcImg}
                alt={'#'}
            />
            <PersonData data={personData}/>
            <AddPost cbAddPost={cbAddPost}
                     changeInputPost={cbChangeInputPost}
                     inputValue={inputValue}
            />
            <Posts postsData={postsData}/>
        </div>
    )
}
