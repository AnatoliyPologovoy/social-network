import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {ProfileActions, profileReducer} from "./profileReducer";
import {friendsReducer} from "./friendsReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {DialogsPagesActions} from "./State";

const rootReducer  = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
// export type StoreType = ReturnType<typeof createStore>

export type AllActionsType = UsersActionsType | DialogsPagesActions | AuthActionsType | ProfileActions

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AllActionsType>

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = ThunkDispatch<RootState, unknown, AllActionsType>