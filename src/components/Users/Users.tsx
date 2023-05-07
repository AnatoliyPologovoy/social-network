import React from 'react';
import {UserStateType} from "../../redux/usersReducer";
import cl from './users.module.css'


export type UsersPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    onClickButtonHandler: (userId: number) => void
    onClickPageHandler: (page: number) => void
}

export const Users:React.FC<UsersPropsType> = (props) => {
    let pages = []
    for (let i = 1; i <= props.maxPage; i++) {
        pages.push(i)
    }

    const totalPages = Math.ceil(props.totalCountUsers / props.usersPerPage)
    pages.push(totalPages)

    const pagination = pages.map((p, i) => {
        const dots = i === pages.length - 1 ? '...' : ''
        const isCurrentPage = p === props.currentPage
        const className = isCurrentPage ? cl.currentPage : cl.numberPage
        return (
            <span
                className={className}
                onClick={(e) => props.onClickPageHandler(p)}
            >
            {dots}{p}
            </span>
        )
    })

    const usersRender = props.users.map(us => {
        const buttonName = us.followed ? 'unFollow' : 'Follow'
        const urlPhoto = us.photos?.small || "https://i.pravatar.cc/38"

        return (
            <li key={us.id}>
                <img alt={'avatar ' + us.name} src={urlPhoto}/>
                <button onClick={() => props.onClickButtonHandler(us.id)}>{buttonName}</button>
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
    )
}