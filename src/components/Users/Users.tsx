import React from 'react';
import {UserStateType} from "redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "components/common/Paginator/Paginator";


export type UsersPropsType = {
		users: UserStateType[]
		totalCountUsers: number
		usersPerPage: number
		currentPage: number
		maxPage: number
		inFollowingProgressUsers: Array<number | null>
		handlerClickPage: (page: number) => void
		followUser: (userId: number) => void
		unFollowUser: (userId: number) => void
		isAuthorized: boolean
}

export const Users: React.FC<UsersPropsType> = (props) => {

		const usersRender = props.users.map(us => {
						const followTitle = us.followed ? 'unFollow' : 'Follow'
						const urlPhoto = us.photos?.small || "https://i.pravatar.cc/38"
						const userId = us.id

						const onClickFollowButtonHandler = () => {
								us.followed
										? props.unFollowUser(userId)
										: props.followUser(userId)
						}

						const isDisableFollowButton =
								props.inFollowingProgressUsers.includes(userId) || !props.isAuthorized

						return (
								<li key={us.id}>
										<NavLink to={'/profile/' + us.id}>
												<img alt={'avatar ' + us.name} src={urlPhoto}/>
										</NavLink>
										<button
												disabled={isDisableFollowButton}
												onClick={onClickFollowButtonHandler}
										>
												{followTitle}
										</button>
										<div>
												<span>{us.name}</span>
												<span>{us.status}</span>
										</div>
								</li>
						)
				}
		)

		return (
				<>
						<Paginator
								handlerClickPage={props.handlerClickPage}
								currentPage={props.currentPage}
								maxPage={props.maxPage}
								totalCountUsers={props.totalCountUsers}
								usersPerPage={props.usersPerPage}
						/>
						<ul>
								{usersRender}
						</ul>
				</>
		)
}