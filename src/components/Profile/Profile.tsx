import React from 'react';
import cl from "./profile.module.css";
import {PersonData} from "./PersonData/PersonData";
import AddPost from "./AddPost/AddPost";
import {Posts} from "./Posts/Posts";
import {PersonDataType, PostsType} from "../../redux/State";

type ProfilePropsType = {
    srcImg: string
    personData: PersonDataType
    cbAddPost: () => void
    cbChangeInputPost: (text: string) => void
    inputValue: string
    postsData: PostsType
}

const Profile: React.FC <ProfilePropsType> = (props) => {
    return (
        <div>
            <div className={cl.profile}>
                <img
                    src={props.srcImg}
                    alt={'#'}
                />
                <PersonData data={props.personData}/>
                <AddPost cbAddPost={props.cbAddPost}
                         changeInputPost={props.cbChangeInputPost}
                         inputValue={props.inputValue}
                />
                <Posts postsData={props.postsData}/>
            </div>
        </div>
    );
};

export default Profile;