import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {friendsReducer} from "./friendsReducer";
import {usersReducer} from "./usersReducer";
// import {StoreType} from "./State";

const rootReducer  = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    usersPage: usersReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer)

// export type StoreType = ReturnType<typeof createStore>