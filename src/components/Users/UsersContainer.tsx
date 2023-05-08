import {connect} from "react-redux";
import {
    setCurrentPageAC, setIsFetchingAC,
    setTotalCountAC,
    setUsersAC,
    toggleFollowAC,
    UsersActionsType,
    UserStateType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/Spinner.svg"
import {Preloader} from "../common/Preloader";

export type UsersAPIContainerPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    isFetching: boolean
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
    setTotalCountUsers: (count: number) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (value: boolean) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerPropsType, any> {

    componentDidMount() {
        const usersPerPage = this.props.usersPerPage
        const request = '?count=' + usersPerPage
        const url = 'https://social-network.samuraijs.com/api/1.0/users' + request

        this.props.setIsFetching(true)
        axios.get(url)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCountUsers(response.data.totalCount)
                this.props.setIsFetching(false)
            })

    }

    onClickPageHandler = (page: number) => {
        const usersPerPage = this.props.usersPerPage
        const request = '?count=' + usersPerPage + '&page=' + page
        const url = 'https://social-network.samuraijs.com/api/1.0/users' + request

        this.props.setIsFetching(true)
        axios.get(url)
            .then(response => {
                this.props.setUsers(response.data.items)
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
                    onClickPageHandler={this.onClickPageHandler}
                    onClickButtonHandler={this.onClickButtonHandler}
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
}

export type mapDispatchToProps = {
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
    setTotalCountUsers: (count: number) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (value: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        totalCountUsers: state.usersPage.totalCountUsers,
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        currentPage: state.usersPage.currentPage,
        maxPage: state.usersPage.maxPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps =
    (dispatch: (action: UsersActionsType) => void): mapDispatchToProps => {
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
            },
            setIsFetching: (value: boolean) => {
                dispatch(setIsFetchingAC(value))
            }
        }
    }

export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)