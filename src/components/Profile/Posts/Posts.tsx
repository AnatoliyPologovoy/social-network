import React, {ComponentType, useState} from 'react'
import cl from './Posts.module.css'
import {PostItemType, PostsType} from 'redux/profileReducer'
import {HeartFilled, HeartOutlined} from '@ant-design/icons'
import {Preloader} from 'components/common/Preloader'

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
                <Likes likesCount={post.likes}/>
            </li>
        )
    })

    return <ul className={cl.postsList}>{renderPostItem}</ul>
}

export function Hearts<T extends JSX.IntrinsicAttributes>(
    WrappedComponent: ComponentType<T>,
) {
    return (props: T) => {
        return <WrappedComponent {...props} className={cl.likesIcon}/>
    }
}

const NewHeart = Hearts(HeartFilled)

type LikesPropsType = {
    likesCount: number
}

const Likes: React.FC<LikesPropsType> = ({likesCount}) => {

    const [isOnClick, setOnClick] = useState(false)

    const handlerClickLike = () => {

    }

    return (
        <div className={cl.postItem_likes}>
            <NewHeart rev={null} onClick={() => console.log('click')}/>
            {/*{isOnClick*/}
            {/*    ? <NewHeart rev={null} onClick={() => console.log('click')}/>*/}
            {/*    : <HeartOutlined rev={null} className={cl.likesIcon} />*/}
            {/*}*/}
            <span className={cl.likesCount}>{likesCount}</span>
        </div>
    )
}

