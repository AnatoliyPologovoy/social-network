import {AppStateType} from "redux/redux-store";

export const getTotalCountUsers = (state: AppStateType) => {
		return state.usersPage.totalCountUsers
}

export const getUsers = (state: AppStateType) => {
		return state.usersPage.users
}

export const getUsersPerPage = (state: AppStateType) => {
		return state.usersPage.usersPerPage
}

export const getCurrentPage = (state: AppStateType) => {
		return state.usersPage.currentPage
}

export const getMaxPage = (state: AppStateType) => {
		return state.usersPage.maxPage
}

export const getIsFetching = (state: AppStateType) => {
		return state.usersPage.isFetching
}

export const getInFollowingProgressUsers = (state: AppStateType) => {
		return state.usersPage.inFollowingProgressUsers
}

export const getIsAuthorized = (state: AppStateType) => {
		return state.auth.isAuthorized
}