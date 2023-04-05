import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {
    addPostActionCreation,
    changeInputPostTextActionCreation,
    StoreType
} from "../../redux/State";
import AddPost from "./AddPost/AddPost";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const srcImg = props.store._state.profilePage.personData.mainImg
    const personData = props.store._state.profilePage.personData

    const cbAddPost = () => props.store.dispatch(addPostActionCreation())
    const cbChangeInputPost = (text: string) => {
        return props.store.dispatch(changeInputPostTextActionCreation(text))
    }

    const inputValue = props.store.getState().profilePage.postText
    const postsData = props.store._state.profilePage.postsData

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
