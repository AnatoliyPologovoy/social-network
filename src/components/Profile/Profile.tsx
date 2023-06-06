import React from 'react';
import cl from "./profile.module.css";
import {PersonData} from "./PersonData/PersonData";
import AddPost from "./AddPost/AddPost";
import {Posts} from "./Posts/Posts";
import {CurrentProfileDomainType, ProfilePageType} from "../../redux/profileReducer";


type ProfilePropsType = {
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    profilePage: ProfilePageType
    currentProfile: CurrentProfileDomainType
}

const Profile: React.FC <ProfilePropsType> = (props) => {
    const srcImg = props.profilePage.personData.mainImg
    const personData = props.profilePage.personData
    const inputValue = props.profilePage.postText
    const postsData = props.profilePage.postsData
    const profileStatus = props.profilePage.status

    return (
        <div>
            <div className={cl.profile}>
                <img
                    src={srcImg}
                    alt={'#'}
                />
                <PersonData
                    data={personData}
                    currentProfile={props.currentProfile}
                    profileStatus={profileStatus}
                />
                <AddPost cbAddPost={props.cbAddPost}
                         changeInputPost={props.cbChangeInputPost}
                         inputValue={inputValue}
                />
                <Posts postsData={postsData}/>
            </div>
        </div>
    );
};

export default Profile;