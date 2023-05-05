import {connect} from "react-redux";
import {Users} from "./Users";
import {
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC,
    UsersActionsType,
    UserStateType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";

export type mapStateToPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
}

export type mapDispatchToProps = {
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
    setTotalCountUsers: (count: number) => void
    setCurrentPage: (page: number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        totalCountUsers: state.usersPage.totalCountUsers,
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage,
        maxPage: state.usersPage.maxPage
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
        },
        setTotalCountUsers: (count) => {
            dispatch(setTotalCountAC(count))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)