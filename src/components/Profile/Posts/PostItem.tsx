import React from "react";
import cl from "./Posts.module.css";

type PostItemType = {
    postData : PostItemArrayType
}

type PostItemArrayType = {
    id : number,
    message : string,
    likes : number
}

export const PostItem : React.FC<PostItemType> = (props) => {
    return (
        <li>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                 alt="аватарка с котом в очках" className={cl.post_item_avatar}/>
            <p>{props.postData.message}</p>
            <span>{props.postData.likes} likes</span>
        </li>
    )
}