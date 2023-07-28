import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {getUsersThunkCreator, setUsersPerPage, UserStateType} from "redux/usersReducer";
import {Paginator} from "components/common/Paginator/Paginator";
import {User} from "components/Users/User/User";
import cl from "components/Users/users.module.css"
import {debounce} from "utils/debounce";
import {useDispatch} from "react-redux";
import {getNeedUsesPerPage} from "utils/getNeedUserPerPage";


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
		const [resize, setResize] = useState<number>(0)

		useEffect(() => {
				const setResizeCallBack = debounce((e) => {
						setResize(e.currentTarget.innerWidth +
								e.currentTarget.innerHeight)
				}, 1000)
				window.addEventListener('resize', setResizeCallBack)

				return () => {
						window.removeEventListener('resize', setResizeCallBack)
				}
		}, [])

		useEffect(() => {
				resize && dispatch(getUsersThunkCreator(props.currentPage))
		}, [resize])

		//setUsersPerPage before call componentDidMount in parent UsersAPIContainer
		useLayoutEffect(() => {
				if (usersNode.current) {
						const elemWidth = usersNode.current.scrollWidth
						console.log('usersNode.current: ', elemWidth)
						const elemHeight = usersNode.current.scrollHeight
						const userPerPage = getNeedUsesPerPage(elemWidth, elemHeight)
						dispatch(setUsersPerPage(userPerPage))
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