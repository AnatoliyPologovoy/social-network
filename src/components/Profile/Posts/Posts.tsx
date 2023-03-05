import React from "react";
import cl from "./Posts.module.css";

type PostItemType = {
    id : number,
    message : string,
    likes : number
}
export const Posts = () => {
    let postData : PostItemType[] = [
        {id : 1, message : "Hello, world!", likes : 11},
        {id : 2, message : "This is my new post", likes : 5},
        {id : 3, message : "I love React", likes : 125},
    ]

    const renderPostItem = postData.map((curr:PostItemType) => {
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
        <ul>
            {renderPostItem}
{/*
            <PostItem postData={postData[0]}/>
*/}
        </ul>
    )
}

