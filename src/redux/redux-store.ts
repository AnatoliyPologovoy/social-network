import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {friendsReducer} from "./friendsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
// import {StoreType} from "./State";

const rootReducer  = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
// export type StoreType = ReturnType<typeof createStore>