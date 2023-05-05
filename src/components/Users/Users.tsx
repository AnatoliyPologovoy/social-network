import React from 'react';
import {UserStateType} from "../../redux/usersReducer";
import axios from "axios";
import cl from './users.module.css'


export type UsersPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
    setTotalCountUsers: (count: number) => void
    setCurrentPage: (page: number) => void
}

export class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        const usersPerPage = this.props.usersPerPage
        const request = '?count=' + usersPerPage
        const url = 'https://social-network.samuraijs.com/api/1.0/users' + request

        axios.get(url)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCountUsers(response.data.totalCount)
            })

    }

    onClickPageHandler = (page: number) => {
        const usersPerPage = this.props.usersPerPage
        const request = '?count=' + usersPerPage + '&page=' + page
        const url = 'https://social-network.samuraijs.com/api/1.0/users' + request

        axios.get(url)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(page)
            })
    }

    onClickButtonHandler = (id: number) => {
        this.props.toggleFollow(id)
    }

    render() {
        let pages = []
        for (let i = 1; i <= this.props.maxPage; i++) {
            pages.push(i)
        }

        const totalPages = Math.ceil(this.props.totalCountUsers / this.props.usersPerPage)
        pages.push(totalPages)

        const pagination = pages.map((p, i) => {
            const dots = i === pages.length - 1 ? '...' : ''
            const isCurrentPage = p === this.props.currentPage
            const className = isCurrentPage ? cl.currentPage : cl.numberPage
            return (
                <span
                    className={className}
                    onClick={(e) => this.onClickPageHandler(p)}
                >
                    {dots}{p}
                </span>
            )
        })

        const usersRender = this.props.users.map(us => {
            const buttonName = us.followed ? 'unFollow' : 'Follow'
            const urlPhoto = us.photos?.small || "https://i.pravatar.cc/38"

            return (
                <li key={us.id}>
                    <img alt={'avatar ' + us.name} src={urlPhoto}/>
                    <button onClick={() => this.onClickButtonHandler(us.id)}>{buttonName}</button>
                    <div>
                        <span>{us.name}</span>
                        <span>{us.status}</span>
                        {/*<span>{us.location.cityName} + ' ' + {us.location.country} </span>*/}
                    </div>
                </li>
            )
        })
        return (
            <ul>
                {pagination}
                {usersRender}
            </ul>
        );
    }
}

// export const Users: React.FC<UsersPropsType> = (props) => {
//
//     const usersRender = props.users.map(us => {
//
//         const buttonName = us.isFollow ? 'unFollow' : 'Follow'
//         const onClickButtonHandler = () => {
//             props.toggleFollow(us.id)
//         }
//
//         return (
//             <li key={us.id}>
//                 <img alt={'avatar ' + us.name} src={us.avatar}/>
//                 <button onClick={onClickButtonHandler}>{buttonName}</button>
//                 <div>
//                     <span>{us.name}</span>
//                     <span>{us.status}</span>
//                     <span>{us.location.cityName} + ' ' + {us.location.country} </span>
//                 </div>
//             </li>
//         )
//     })
//     return (
//         <ul>
//             {usersRender}
//         </ul>
//     );
// };