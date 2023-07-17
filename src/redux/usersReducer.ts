import {usersAPI} from "DAL/API";
import {AppThunk} from "./redux-store";
import {toggleFollowingUser} from "utils/toggleFollowingUser";
import ReactDOM from "react-dom";

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_USER_IN_FOLLOWING_PROGRESS = 'SET_USER_IN_FOLLOWING_PROGRESS'
const SET_USERS_PER_PAGE = 'SET_USERS_PER_PAGE'

export type UserStateType = {
		id: number
		name: string
		followed: boolean
		status: string | null
		photos?: {
				small: string | null
				large: string | null
		}
		uniqueUrlName?: string | null
}

export type UsersStateType = {
		users: UserStateType[]
		totalCountUsers: number
		usersPerPage: number
		currentPage: number
		maxPage: number
		isFetching: boolean
		inFollowingProgressUsers: Array<number | null>
}

let initialState: UsersStateType = {
		users: [],
		totalCountUsers: 0,
		usersPerPage: 10,
		currentPage: 1,
		maxPage: 20,
		isFetching: false,
		inFollowingProgressUsers: []
}

export const usersReducer =
		(state: UsersStateType = initialState,
		 action: UsersActionsType): UsersStateType => {
				switch (action.type) {
						case SET_USERS_PER_PAGE:
								return {...state, usersPerPage: action.payload.usersPerPage}
						case TOGGLE_FOLLOW:
								return {
										...state, users: state.users.map(us => {
												return us.id === action.payload.id ? {
														...us, followed:
																!us.followed
												} : us
										})
								}
						case SET_USERS:
								return {
										...state, users: [...action.payload.users]
								}
						case SET_TOTAL_COUNT_USERS:
								return {...state, totalCountUsers: action.payload.totalCount}
						case SET_CURRENT_PAGE:
								return {...state, currentPage: action.payload.page}
						case SET_IS_FETCHING:
								return {...state, isFetching: action.payload.value}
						case SET_USER_IN_FOLLOWING_PROGRESS:
								return {
										...state, inFollowingProgressUsers:
												action.payload.isFetching
														? [...state.inFollowingProgressUsers, action.payload.userId]
														: state.inFollowingProgressUsers.filter(id => id !== action.payload.userId)
								}
						default:
								return state
				}
		}


export type ToggleFollowACType = {
		type: 'TOGGLE-FOLLOW'
		payload: {
				id: number
		}
}

export type SetUsersACType = {
		type: 'SET-USERS'
		payload: {
				users: UserStateType[]
		}
}

export type UsersActionsType =
		| ToggleFollowACType
		| SetUsersACType
		| SetTotalCountACType
		| SetCurrentPageACType
		| SetIsFetching
		| setUserInFollowingProgressACType
		| setUsersForPageACType

export const toggleFollowAC = (id: number): ToggleFollowACType => {
		return {
				type: TOGGLE_FOLLOW,
				payload: {
						id
				}
		}
}

export const setUsersAC = (users: UserStateType[]): SetUsersACType => {
		return {
				type: SET_USERS,
				payload: {
						users
				}
		}
}

export const setTotalCountUsersAC = (totalCount: number) => {
		return {
				type: SET_TOTAL_COUNT_USERS,
				payload: {
						totalCount
				}
		} as const
}
type SetTotalCountACType = ReturnType<typeof setTotalCountUsersAC>

export const setCurrentPageAC = (page: number) => {
		return {
				type: SET_CURRENT_PAGE,
				payload: {
						page
				}
		} as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setIsFetchingAC = (value: boolean) => {
		return {
				type: SET_IS_FETCHING,
				payload: {
						value
				}
		} as const
}
type SetIsFetching = ReturnType<typeof setIsFetchingAC>

export const setUserInFollowingProgressAC = (userId: number, isFetching: boolean) => {
		return {
				type: SET_USER_IN_FOLLOWING_PROGRESS,
				payload: {
						isFetching,
						userId
				}
		} as const
}

type setUserInFollowingProgressACType = ReturnType<typeof setUserInFollowingProgressAC>

export const setUsersPerPage = (elemWidth: number, elemHeight: number) => {
		const usersForWidth = Math.floor((elemWidth - 30) / 130)
		const usersForHeight = Math.floor((elemHeight - 30) / 200)

		let usersPerPage = usersForWidth * usersForHeight
		console.log('usersPerPage ',  usersForWidth, usersForHeight)
		console.log('width/height ',  elemWidth, elemHeight)
		return {
				type: SET_USERS_PER_PAGE,
				payload: {
						usersPerPage
				}
		} as const
}

type setUsersForPageACType = ReturnType<typeof setUsersPerPage>


//Thunks
export const getUsersThunkCreator = (currentPage: number = 1):
		AppThunk => {
		return async (dispatch, getState) => {
				dispatch(setIsFetchingAC(true))
				const usersPerPage = getState().usersPage.usersPerPage
				console.log('getUsersThunkCreator, usersPerPage - ', usersPerPage)
				try {
						const data = await
								usersAPI.getUsers(usersPerPage, currentPage)
						dispatch(setUsersAC(data.items))
						dispatch(setTotalCountUsersAC(data.totalCount))
						dispatch(setCurrentPageAC(currentPage))
				} catch (e) {
						console.log(e)
						//need errors handler
				} finally {
						dispatch(setIsFetchingAC(false))
				}
		}
}

export const followUser = (userId: number): AppThunk => {
		return (dispatch) => {
				toggleFollowingUser(userId, usersAPI.follow, dispatch)
		}
}

export const unFollowUser = (userId: number): AppThunk => {
		return (dispatch) => {
				toggleFollowingUser(userId, usersAPI.unFollow, dispatch)
		}
}


