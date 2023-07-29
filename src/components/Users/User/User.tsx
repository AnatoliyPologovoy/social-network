import React, {FC, useLayoutEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import {UserStateType} from "redux/usersReducer";
import cl from "components/Users/User/user.module.css"
import avatarPlaceholder from "assets/avatar_placeholder.png"
import {cutString} from "utils/cutString";

type Props = {
		user: UserStateType
		disablingButton: (userId: number) => boolean
		followUser: (userId: number) => void
		unFollowUser: (userId: number) => void
}

export const User: FC<Props> = (
		{
				user,
				disablingButton,
				followUser,
				unFollowUser,
		}
) => {

		const maxLengthString = 25
		const isFollowed = user.followed
		const followTitle = isFollowed ? 'unFollow' : 'Follow'
		const userId = user.id

		const urlPhoto = user.photos?.small || avatarPlaceholder

		const handlerClickButtonFollow = () => {
				isFollowed
						? unFollowUser(userId)
						: followUser(userId)
		}

		const isDisableFollowButton = disablingButton(userId)

		return (
				<li key={user.id} className={cl.user}>
						<NavLink to={'/profile/' + userId}>
								<img alt={'avatar ' + user.name} src={urlPhoto} width={100} height={100}/>
						</NavLink>
						<div className={cl.nameWrapper}>
								<p className={cl.name}>{cutString(user.name, maxLengthString)}</p>
								{user.status && <p className={cl.status}>{cutString(user.status, maxLengthString)}</p>}
						</div>
						<button
								disabled={isDisableFollowButton}
								onClick={handlerClickButtonFollow}
						>
								{followTitle}
						</button>
				</li>
		)
}


