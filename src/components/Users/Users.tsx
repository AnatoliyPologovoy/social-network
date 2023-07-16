import React from 'react';
import {UserStateType} from "redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User/User";


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

		const disablingButton = (userId: number) => {
				return props.inFollowingProgressUsers.includes(userId) || !props.isAuthorized
		}
		const mappedUsers = props.users.map((user, i) => {
						return <User
								key={i}
								user={user}
								disablingButton={disablingButton}
								followUser={props.followUser}
								unFollowUser={props.unFollowUser}
						/>
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
								{mappedUsers}
						</ul>
				</>
		)
}