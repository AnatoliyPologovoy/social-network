import {AppThunk} from "redux/redux-store";
import {authMeTC} from "redux/authReducer";
import {usersAPI} from "DAL/API";

const SET_IS_INITIALISED = 'SET_IS_INITIALISED'

export type AppStateType = {
		isInitialized: boolean
}

const initialState: AppStateType = {
		isInitialized: false
}

export type AppActionsType = SetIsInitializedType

export const appReducer =
		(state = initialState, action: AppActionsType) => {
				switch (action.type) {
						case 'SET_IS_INITIALISED':
								return {...state, isInitialized: true}

						default:
								return state
				}
		}

export const setIsInitialized = () => {
		return {
				type: SET_IS_INITIALISED,
		} as const
}
type SetIsInitializedType = ReturnType<typeof setIsInitialized>

//Thunks
export const initializeApp = (): AppThunk => async (dispatch) => {
		try {
				await dispatch(authMeTC())
				// usersAPI.getFriends(10).then(res => {
				//
				// 		console.log('initializeApp > usersAPI.getFriends ', res.items)
				// } )
		} catch (e) {
				console.log(e)
				//need errors handler
		} finally {
				dispatch(setIsInitialized())
		}
}
