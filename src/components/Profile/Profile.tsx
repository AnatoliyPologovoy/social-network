import React from "react";
import cl from "./profile.module.css";
import {Posts} from "./Posts/Posts";
import {PersonData} from "./PersonData/PersonData";
import {StoreType} from "../../redux/State";
import AddPost from "./AddPost/AddPost";
import {addPostActionCreation, changeInputPostTextActionCreation} from "../../redux/profileReducer";
import {StoreContext} from "../../redux/StoreContext";

type ProfilePropsType = {
    //store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

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
            }
        </StoreContext.Consumer>
    )
}
