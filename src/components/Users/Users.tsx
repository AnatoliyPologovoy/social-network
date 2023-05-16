import React from 'react';
import {UserStateType} from "../../redux/usersReducer";
import cl from './users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";


export type UsersPropsType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    setToggleFollow: (userId: number) => void
    onClickPageHandler: (page: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
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
            const isFollowName = us.followed ? 'unFollow' : 'Follow'
            const urlPhoto = us.photos?.small || "https://i.pravatar.cc/38"

            const onClickFollowButtonHandler = () => {
                const url = 'https://social-network.samuraijs.com/api/1.0/follow/' + us.id

                us.followed ?
                    axios.delete(url, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "92e42b1a-9c6c-405e-ad44-73ba793511a6"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {

                                props.setToggleFollow(us.id)
                            }
                        })

                    :

                    axios.post(url, null, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "92e42b1a-9c6c-405e-ad44-73ba793511a6"
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.setToggleFollow(us.id)
                            }
                        })
            }

            return (
                <li key={us.id}>
                    <NavLink to={'/profile/' + us.id}>
                        <img alt={'avatar ' + us.name} src={urlPhoto}/>
                    </NavLink>
                    <button onClick={onClickFollowButtonHandler}>{isFollowName}</button>
                    <div>
                        <span>{us.name}</span>
                        <span>{us.status}</span>
                        {/*<span>{us.location.cityName} + ' ' + {us.location.country} </span>*/}
                    </div>
                </li>
            )
        }
    )

    return (
        <ul>
            {pagination}
            {usersRender}
        </ul>
    )
}