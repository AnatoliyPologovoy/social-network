import React from 'react';
import {UserStateType} from "../../redux/usersReducer";
import axios from "axios";


export type UsersPropsType = {
    users: UserStateType[]
    toggleFollow: (userId: number) => void
    setUsers: (users: UserStateType[]) => void
}

export class Users extends React.Component<UsersPropsType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    onClickButtonHandler = (id: number) => {
        this.props.toggleFollow(id)
    }

    render() {
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