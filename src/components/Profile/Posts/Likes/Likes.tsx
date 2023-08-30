import React, {ComponentType} from 'react'
import cl from 'components/Profile/Posts/Posts.module.css'
import {HeartFilled, HeartOutlined} from '@ant-design/icons'
import {useDispatch} from 'react-redux'
import {setOnClick} from 'redux/profileReducer'

export function Hearts<T extends JSX.IntrinsicAttributes>(
    WrappedComponent: ComponentType<T>, onClick: () => void
) {
    return (props: T) => {
        return <WrappedComponent
            {...props}
            className={cl.likesIcon}
            onClick={onClick}
        />
    }
}

type LikesPropsType = {
    likesCount: number
    isOnClick: boolean
    postId: number
}
export const Likes: React.FC<LikesPropsType> = (
    {likesCount, isOnClick, postId}
) => {
    const dispatch = useDispatch()

    const handlerClickLike = () => {
        dispatch(setOnClick(postId))
    }

    const HeartFilledHOC = Hearts(HeartFilled, handlerClickLike)
    const HeartOutlinedHOC = Hearts(HeartOutlined, handlerClickLike)

    return (
        <div className={cl.postItem_likes}>
            {isOnClick
                ? <HeartFilledHOC rev={null} />
                : <HeartOutlinedHOC rev={null} />
            }
            <span className={cl.likesCount}>{likesCount}</span>
        </div>
    )
}