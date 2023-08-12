import React from 'react'
import cl from './Posts.module.css'
import {PostItemType, PostsType} from 'redux/profileReducer'
import {Likes} from 'components/Profile/Posts/Likes/Likes'
import avatarPlaceholder from 'assets/avatar_placeholder.png'

type PostsPropsType = {
    postsData: PostsType
    smallPhoto: string | null
    userName: string | null
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    const srcPhoto =
        props.smallPhoto || avatarPlaceholder

    const renderPostItem = props.postsData.map((post: PostItemType) => {
        return (
            <li key={post.id.toString()} className={cl.postItem}>
                <div className={cl.postItem_mainWrapper}>
                    <div className={cl.postItem_avatarNameWrapper}>

                        <b className={cl.postItem_userName}>{props.userName}</b>
                        <img
                            src={srcPhoto}
                            alt=''
                            className={cl.postItem_avatar}
                        />
                    </div>
                    <span className={cl.postItem_text}>{post.text}</span>
                </div>
                <Likes
                    likesCount={post.likes}
                    isOnClick={post.isOnClick}
                    postId={post.id}
                />
            </li>
        )
    })

    return <ul className={cl.postsList}>{renderPostItem}</ul>
}

