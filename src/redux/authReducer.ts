import {AllActionsType, AppStateType, AppThunk} from './redux-store'
import {authAPI, securityAPI} from 'DAL/API'
import {stopSubmit} from 'redux-form'
import {ThunkAction} from 'redux-thunk'

const SET_IS_FETCHING_AUTH = 'SET_IS_FETCHING_AUTH'
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

export type AuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthStateType = {
    data: AuthUserDataType
    isFetching: boolean
    isAuthorized: boolean
    captchaUrl: string | null
}

export type FormLoginData = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuthorized: false,
    captchaUrl: null,
}

export type AuthActionsType =
    | SetIsFetchingAuthType
    | SetAuthUserDataActionType
    | SetISAuthorizedType
    | SetCaptchaUrlACType

export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET_IS_FETCHING_AUTH':
            return {...state, isFetching: action.payload.value}
        case 'SET_AUTH_USER_DATA':
            return {...state, data: {...action.payload.userData}}
        case 'SET_IS_AUTHORIZED':
            return {...state, isAuthorized: action.payload.value}
        case 'SET_CAPTCHA_URL':
            return {...state, captchaUrl: action.payload.captchaUrl}
        default:
            return state
    }
}

export const setIsFetchingAuthAC = (value: boolean) => {
    return {
        type: SET_IS_FETCHING_AUTH,
        payload: {
            value,
        },
    } as const
}
type SetIsFetchingAuthType = ReturnType<typeof setIsFetchingAuthAC>

export const setAuthUserDataAC = (data: AuthUserDataType) => {
    return {
        type: SET_AUTH_USER_DATA,
        payload: {
            userData: data,
        },
    } as const
}

type SetAuthUserDataActionType = ReturnType<typeof setAuthUserDataAC>

export const setIsAuthorizedAC = (value: boolean) => {
    return {
        type: SET_IS_AUTHORIZED,
        payload: {
            value,
        },
    } as const
}

type SetISAuthorizedType = ReturnType<typeof setIsAuthorizedAC>

export const setCaptchaUrlAC = (captchaUrl: string | null) => {
    return {
        type: SET_CAPTCHA_URL,
        payload: {
            captchaUrl,
        },
    } as const
}

type SetCaptchaUrlACType = ReturnType<typeof setCaptchaUrlAC>

//Thunks
export const authMeTC = (): ThunkAction<Promise<any>,
    AppStateType,
    unknown,
    AllActionsType> => {
    return (dispatch) => {
        return authAPI
            .authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(data.data))
                    dispatch(setIsAuthorizedAC(true))
                } else {
                    console.log('You are not is authorized, please login')
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrlAC(response.url))
    } catch (e) {
        console.log(e)
    }
}

export const loginTC =
    (formData: FormLoginData): AppThunk =>
        (dispatch) => {
            authAPI
                .logIn(formData)
                .then((data) => {
                    if (data.resultCode === 0) {
                        dispatch(authMeTC())
                        dispatch(setCaptchaUrlAC(null))
                    } else {
                        const errorMessage = data.messages.length > 0
                            ? data.messages[0]
                            : 'Some error'
                        dispatch(stopSubmit('login', {_error: errorMessage}))
                        if (data.resultCode === 10) {
                            dispatch(getCaptchaUrl())
                        }
                    }
                })
                .catch(() => {
                    dispatch(stopSubmit('login', {_error: 'Network error'}))
                })
        }

export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logOut().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setIsAuthorizedAC(false))
                dispatch(
                    setAuthUserDataAC({
                        id: null,
                        email: null,
                        login: null,
                    }),
                )
            }
        })
    }
}
