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