import {AppStateType} from "redux/redux-store";

export const getProfilePage = (state: AppStateType) => {
		return state.profilePage
}

export const getAuthData = (state: AppStateType) => {
		return state.auth.data
}