import {AppThunk} from "./redux-store";
import {authAPI} from "DAL/API";
import {stopSubmit} from "redux-form";

const SET_IS_FETCHING_AUTH = 'SET_IS_FETCHING_AUTH'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED'

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthStateType = {
    data: AuthUserDataType
    isFetching: boolean
    isAuthorized: boolean
}

export type FormLoginData = {
    email: string
    password: string
    rememberMe: boolean
}


const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuthorized: false
}

export type AuthActionsType = SetIsFetchingAuthType
    | SetAuthUserDataActionType | SetISAuthorizedType

export const authReducer =
    (state = initialState, action: AuthActionsType) => {
        switch (action.type) {
            case "SET_IS_FETCHING_AUTH":
                return {...state, isFetching: action.payload.value}
            case "SET_AUTH_USER_DATA":
                return {...state, data: {...action.payload.userData}}
            case "SET_IS_AUTHORIZED":
                return {...state, isAuthorized: action.payload.value}
            default:
                return state
        }
    }


export const setIsFetchingAuthAC = (value: boolean) => {
    return {
        type: SET_IS_FETCHING_AUTH,
        payload: {
            value
        }
    } as const
}
type SetIsFetchingAuthType = ReturnType<typeof setIsFetchingAuthAC>

export const setAuthUserDataAC = (data: AuthUserDataType) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            userData: data
        }
    } as const
}

type SetAuthUserDataActionType = ReturnType<typeof setAuthUserDataAC>

export const setIsAuthorizedAC = (value: boolean) => {
    return {
        type: SET_IS_AUTHORIZED,
        payload: {
            value
        }
    } as const
}

type SetISAuthorizedType = ReturnType<typeof setIsAuthorizedAC>


//Thunks
export const authMeTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(data.data))
                dispatch(setIsAuthorizedAC(true))
            }
        })
    }
}

export const submitFormTC = (formData: FormLoginData): AppThunk => (dispatch) => {
    authAPI.logIn(formData)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(authMeTC())
            }
            else {
                const errorMessage
                    = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
        .catch(()=>{
            dispatch(stopSubmit('login', {_error: 'Network error'}))
        })
}

export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logOut().then(data => {
            if (data.resultCode === 0) {
                dispatch(setIsAuthorizedAC(false))
                dispatch(setAuthUserDataAC({
                    id: null,
                    email: null,
                    login: null,
                }))
            }
        })
    }
}