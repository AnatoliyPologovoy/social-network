import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {getUsersThunkCreator, setUsersPerPage, UserStateType} from "redux/usersReducer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User/User";
import cl from "components/Users/users.module.css"
import {debounce} from "utils/debounce";
import {useDispatch} from "react-redux";


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
		const usersNode = useRef<null | HTMLUListElement>(null)
		const dispatch = useDispatch()
		const [resize, setResize] = useState<null | number>(null)

		useEffect(() => {
				window.addEventListener('resize', debounce((e) => {
						console.log(e.currentTarget.innerWidth)
						setResize(e.currentTarget.innerWidth)
				}, 1000));
		}, [])


		useLayoutEffect(() => {
				if (usersNode.current) {
						const elemWidth = usersNode.current.offsetWidth
						const elemHeight = usersNode.current.offsetHeight
						dispatch(setUsersPerPage(elemWidth, elemHeight))
						dispatch(getUsersThunkCreator(props.currentPage))
						console.log(elemWidth)
				}
		}, [resize])

		const disablingButton = (userId: number) => {
				return props.inFollowingProgressUsers.includes(userId)
						|| !props.isAuthorized
		}
		const mappedUsers = props.users.map(user => {
						return <User
								key={user.id}
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
						<ul className={cl.users} ref={usersNode}>
								{mappedUsers}
						</ul>
				</>
		)
}