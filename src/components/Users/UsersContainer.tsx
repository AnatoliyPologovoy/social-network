import {connect} from 'react-redux'
import {
    followUser,
    getUsersThunkCreator,
    setUsersAC,
    unFollowUser,
    UserStateType,
} from 'redux/usersReducer'
import {AppStateType} from 'redux/redux-store'
import React from 'react'

import {Users} from './Users'
import {Preloader} from '../common/Preloader'
import {compose} from 'redux'
import {
    getCurrentPage,
    getInFollowingProgressUsers,
    getIsAuthorized,
    getIsFetching,
    getMaxPage,
    getTotalCountUsers,
    getUsers,
    getUsersPerPage,
} from 'components/Users/users.selectors'

export type UsersAPIContainerPropsType = mapStateToPropsType & {
    setUsers: (users: UserStateType[]) => void
    getUsers: (currentPage?: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

export class UsersAPIContainer extends React.Component<
    UsersAPIContainerPropsType,
    any
> {
    componentDidMount() {
        console.log(' Users componentDidMount')
        this.props.getUsers()
    }

    handlerClickPage = (page: number) => {
        this.props.getUsers(page)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    users={this.props.users}
                    totalCountUsers={this.props.totalCountUsers}
                    usersPerPage={this.props.usersPerPage}
                    currentPage={this.props.currentPage}
                    maxPage={this.props.maxPage}
                    inFollowingProgressUsers={
                        this.props.inFollowingProgressUsers
                    }
                    handlerClickPage={this.handlerClickPage}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                    isAuthorized={this.props.isAuthorized}
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
    isAuthorized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        totalCountUsers: getTotalCountUsers(state),
        users: getUsers(state),
        usersPerPage: getUsersPerPage(state),
        currentPage: getCurrentPage(state),
        maxPage: getMaxPage(state),
        isFetching: getIsFetching(state),
        inFollowingProgressUsers: getInFollowingProgressUsers(state),
        isAuthorized: getIsAuthorized(state),
    }
}

const objMapDispatchToProps = {
    setUsers: setUsersAC,
    getUsers: getUsersThunkCreator,
    followUser: followUser,
    unFollowUser: unFollowUser,
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, objMapDispatchToProps),
    // WithAuthRedirect
)(UsersAPIContainer)
