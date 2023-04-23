import {connect} from "react-redux";
import {Users} from "./Users";
import {setUsersAC, toggleFollowAC, UsersActionsType, UserStateType} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";

export type mapStateToPropsType = {
    users: UserStateType[]
}

export type mapDispatchToProps = {
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps =
    (dispatch: (action: UsersActionsType) => void):mapDispatchToProps => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)