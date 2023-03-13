import React from "react";
import cl from "./Posts.module.css";
import {PostItemType, PostsType} from "../../../redux/State";

type PostsPropsType = {
    postsData: PostsType
}

export const Posts: React.FC<PostsPropsType> = (props) => {

    const renderPostItem = props.postsData.map((curr:PostItemType) => {
        return (
            <li key={curr.id.toString()}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                     alt="аватарка с котом в очках" className={cl.post_item_avatar}/>
                <p>{curr.message}</p>
                <span>{curr.likes} likes</span>
            </li>
        )
    })

    return (
        <ul className={cl.postsList}>
            <form action="get" className={cl.form_post_message}>
                <textarea name="post-message" id="post-message" cols={60} rows={10}></textarea>
                <input type="submit" value={'Опубликовать'}/>
            </form>
            {renderPostItem}
        </ul>
    )
}

