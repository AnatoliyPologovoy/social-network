import React, {FC, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {UserStateType} from "redux/usersReducer";
import cl from "components/Users/User/user.module.css"


type Props = {
		user: UserStateType
		disablingButton: (userId: number) => boolean
		followUser: (userId: number) => void
		unFollowUser: (userId: number) => void
}

export const User: FC<Props> = ({user, disablingButton, followUser, unFollowUser}) => {
		const isFollowed = user.followed
		const followTitle = isFollowed ? 'unFollow' : 'Follow'
		const userId = user.id

		const initialUrlPhoto = user.photos?.small || "https://placehold.co/100"
		const [urlPhoto, setUrlPhoto] = useState(initialUrlPhoto)
		// console.log(delay)
		let id: any
		useEffect(() => {
				if (!user.photos?.small) {
						const delay = Math.ceil((Math.random() * 1000) + Math.random() * 1000)
						id = setTimeout(() => {
								console.log(delay)
								setUrlPhoto("https://i.pravatar.cc/100")
						}, delay);
				}
				return () => {
						clearTimeout(id)
				}
		}, [])


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


