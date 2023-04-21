import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {StoreType} from "../../redux/State";
import AddPost from "./AddPost/AddPost";
import {addPostActionCreation, changeInputPostTextActionCreation} from "../../redux/profileReducer";
import {StoreContext} from "../../redux/StoreContext";
import Profile from "./Profile";

type ProfileContainerPropsType = {
    //store: StoreType
}

export const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const srcImg = store.getState().profilePage.personData.mainImg
                    const personData = store.getState().profilePage.personData

                    const cbAddPost = () => store.dispatch(addPostActionCreation())
                    const cbChangeInputPost = (text: string) => {
                        return store.dispatch(changeInputPostTextActionCreation(text))
                    }

                    const inputValue = store.getState().profilePage.postText
                    const postsData = store.getState().profilePage.postsData

                    return (
                        <Profile
                            srcImg={srcImg}
                            inputValue={inputValue}
                            postsData={postsData}
                            personData={personData}
                            cbAddPost={cbAddPost}
                            cbChangeInputPost={cbChangeInputPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
