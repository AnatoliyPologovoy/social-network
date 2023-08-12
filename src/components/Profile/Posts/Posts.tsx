import React from 'react'
import cl from './Posts.module.css'
import {PostItemType, PostsType} from 'redux/profileReducer'
import {Likes} from 'components/Profile/Posts/Likes/Likes'

type PostsPropsType = {
    postsData: PostsType
    smallPhoto: string | null
}

export const Posts: React.FC<PostsPropsType> = (props) => {
    const srcPhoto =
        props.smallPhoto ||
        'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'

    const renderPostItem = props.postsData.map((post: PostItemType) => {
        return (
            <li key={post.id.toString()} className={cl.postItem}>
                <div className={cl.postItem_mainWrapper}>
                    <img
                        src={srcPhoto}
                        alt='аватарка с котом в очках'
                        className={cl.postItem_avatar}
                    />
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

