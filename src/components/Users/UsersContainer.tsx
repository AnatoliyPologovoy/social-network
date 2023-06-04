import {connect} from "react-redux";
import {
    followUserThunkCreator,
    getUsersThunkCreator, setUserInFollowingProgressAC,
    setUsersAC,
    toggleFollowAC, unFollowUserThunkCreator,
    UserStateType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";

import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";


export type UsersAPIContainerPropsType = mapStateToPropsType & {
    setUsers: (users: UserStateType[]) => void
    getUsers: (usersPerPage: number, currentPage?: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPerPage)
    }

    onClickPageHandler = (page: number) => {
        this.props.getUsers(this.props.usersPerPage, page)
    }


    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    users={this.props.users}
                    totalCountUsers={this.props.totalCountUsers}
                    usersPerPage={this.props.usersPerPage}
                    currentPage={this.props.currentPage}
                    maxPage={this.props.maxPage}
                    inFollowingProgressUsers={this.props.inFollowingProgressUsers}
                    onClickPageHandler={this.onClickPageHandler}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                />
            </>
        )
    }
}


export type mapStateToPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    isFetching: boolean
    inFollowingProgressUsers: Array<number | null>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        totalCountUsers: state.usersPage.totalCountUsers,
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage,
        maxPage: state.usersPage.maxPage,
        isFetching: state.usersPage.isFetching,
        inFollowingProgressUsers: state.usersPage.inFollowingProgressUsers
    }
}

const objMapDispatchToProps = {
    setUsers: setUsersAC,
    getUsers: getUsersThunkCreator,
    followUser: followUserThunkCreator,
    unFollowUser: unFollowUserThunkCreator
}

export const UsersContainer =
    compose<React.ComponentType>(
        connect(mapStateToProps, objMapDispatchToProps),
        WithAuthRedirect
    )
    (UsersAPIContainer)



// export type mapDispatchToProps = {
//     toggleFollow: (userId: number) => void
//     setUsers: (users: UserStateType[]) => void
//     setTotalCountUsers: (count: number) => void
//     setCurrentPage: (page: number) => void
//     setIsFetching: (value: boolean) => void
// }

// const mapDispatchToProps =
//     (dispatch: (action: UsersActionsType) => void): mapDispatchToProps => {
//         return {
//             toggleFollow: (userId) => {
//                 dispatch(toggleFollowAC(userId))
//             },
//             setUsers: (users) => {
//                 dispatch(setUsersAC(users))
//             },
//             setTotalCountUsers: (count) => {
//                 dispatch(setTotalCountAC(count))
//             },
//             setCurrentPage: (page) => {
//                 dispatch(setCurrentPageAC(page))
//             },
//             setIsFetching: (value: boolean) => {
//                 dispatch(setIsFetchingAC(value))
//             }
//         }
//     }
