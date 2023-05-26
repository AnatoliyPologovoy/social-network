import {connect} from "react-redux";
import {
    setCurrentPageAC, setIsFetchingAC,
    setTotalCountAC, setUserInFollowingProgressAC,
    setUsersAC,
    toggleFollowAC,
    UsersActionsType,
    UserStateType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../DAL/API";

export type UsersAPIContainerPropsType = mapStateToPropsType & {
    // users: UserStateType[]
    // totalCountUsers: number
    // usersPerPage: number
    // currentPage: number
    // maxPage: number
    // isFetching: boolean
    // inFollowingProgressUsers: Array<number | null>
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
    setTotalCountUsers: (count: number) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (value: boolean) => void
    setUserInFollowingProgress: (userId: number, isFetching: boolean) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType, any> {

    componentDidMount() {
        const usersPerPage = this.props.usersPerPage
        this.props.setIsFetching(true)

        usersAPI.getUsers(usersPerPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCountUsers(data.totalCount)
                this.props.setIsFetching(false)
            })

    }

    onClickPageHandler = (page: number) => {
        const usersPerPage = this.props.usersPerPage
        this.props.setIsFetching(true)

        usersAPI.getUsers(usersPerPage, page)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setCurrentPage(page)
                this.props.setIsFetching(false)
            })
    }

    onClickButtonHandler = (id: number) => {
        this.props.toggleFollow(id)
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
                    setToggleFollow={this.onClickButtonHandler}
                    setUserInFollowingProgress={this.props.setUserInFollowingProgress}
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
    toggleFollow: toggleFollowAC,
    setUsers: setUsersAC,
    setTotalCountUsers: setTotalCountAC,
    setCurrentPage: setCurrentPageAC,
    setIsFetching: setIsFetchingAC,
    setUserInFollowingProgress: setUserInFollowingProgressAC
}

export const UsersContainer =
    connect(mapStateToProps, objMapDispatchToProps)(UsersAPIContainer)

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
