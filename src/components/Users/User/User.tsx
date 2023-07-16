import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {UserStateType} from "redux/usersReducer";

type Props = {
		user: UserStateType
		disablingButton: (userId: number) => boolean
		followUser: (userId: number) => void
		unFollowUser: (userId: number) => void
}

export const User: FC<Props> = ({user, disablingButton, followUser, unFollowUser}) => {
		const isFollowed = user.followed
		const followTitle = isFollowed ? 'unFollow' : 'Follow'
		const urlPhoto = user.photos?.small || "https://i.pravatar.cc/38"
		const userId = user.id

		const handlerClickButtonFollow = () => {
				isFollowed
						? unFollowUser(userId)
						: followUser(userId)
		}

		const isDisableFollowButton = disablingButton(userId)

		return (
				<li key={user.id}>
						<NavLink to={'/profile/' + userId}>
								<img alt={'avatar ' + user.name} src={urlPhoto}/>
						</NavLink>
						<button
								disabled={isDisableFollowButton}
								onClick={handlerClickButtonFollow}
						>
								{followTitle}
						</button>
						<div>
								<span>{user.name}</span>
								<span>{user.status}</span>
						</div>
				</li>
		)
}


