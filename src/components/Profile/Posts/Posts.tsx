import React from "react";
import cl from "./Posts.module.css";
import {PostItemType, PostsType} from "redux/profileReducer";


type PostsPropsType = {
    postsData: PostsType
}

export const Posts: React.FC<PostsPropsType> = (props) => {

    const renderPostItem = props.postsData.map((curr:PostItemType) => {
        return (
            <li key={curr.id.toString()}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                     alt="аватарка с котом в очках" className={cl.post_item_avatar}/>
                <p>{curr.text}</p>
                <span>{curr.likes} likes</span>
            </li>
        )
    })

    return (
        <ul className={cl.postsList}>
            {renderPostItem}
        </ul>
    )
}

