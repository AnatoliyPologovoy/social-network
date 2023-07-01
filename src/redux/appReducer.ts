import {AppThunk} from "redux/redux-store";
import {authMeTC} from "redux/authReducer";

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
export const initializeApp = ():AppThunk => (dispatch) => {
    dispatch(authMeTC()).then(res => {
        dispatch(setIsInitialized())
    })
}
