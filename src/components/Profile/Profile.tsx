import React from 'react';
import cl from "./profile.module.css";
import {PersonData} from "./PersonData/PersonData";
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "redux/profileReducer";
import {AddPost} from "./AddPost/AddPost";


type ProfilePropsType = {
    cbAddPost: (post: string) => void
    profilePage: ProfilePageType
}

const Profile: React.FC <ProfilePropsType> = (props) => {
    // const srcImg = props.profilePage.personData.mainImg
    // const personData = props.profilePage.personData
    const postsData = props.profilePage.postsData
    const profileStatus = props.profilePage.status
    const currentProfile = props.profilePage.currentProfile

    return (
        <div>
            <div className={cl.profile}>
                {/*<img*/}
                {/*    src={srcImg}*/}
                {/*    alt={'#'}*/}
                {/*/>*/}
                <PersonData
                    // data={personData}
                    currentProfile={currentProfile}
                    profileStatus={profileStatus}
                />
                <AddPost cbAddPost={props.cbAddPost}
                />
                <Posts postsData={postsData}/>
            </div>
        </div>
    );
};

export default Profile;