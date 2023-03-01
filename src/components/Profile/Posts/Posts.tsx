import React from "react";
import {PostItem} from "./PostItem";
//import cl from "./Posts.module.css";

export const Posts = () => {
    let postData = [
        {id : 1, message : "Hello, world!", likes : 11},
        {id : 2, message : "This is my new post", likes : 5},
        {id : 3, message : "I love React", likes : 125},
    ]

    const renderPostItem = postData.map((curr) => {
        return (
            <PostItem postData={curr}/>
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

