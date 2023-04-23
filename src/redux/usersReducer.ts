const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'

export type UserStateType = {
    id: number
    name: string
    isFollow: boolean
    status: string
    avatar: string
    location: {
        cityName: string
        country: string
    }
}

export type UsersStateType = {
    users: UserStateType[]
}

let initialState: UsersStateType = {
    users: [
        {
            id: 1, status: "Hello, world!", name: 'Roman', isFollow: true, location: {
                cityName: 'Moscow', country: 'Russia'
            },
            avatar: "https://i.pravatar.cc/38"
        },
        {
            id: 2, status: "This is my new post", name: 'Andrew', isFollow: true, location: {
                cityName: 'Berlin', country: 'Germany'
            },
            avatar: "https://i.pravatar.cc/38"
        },
        {
            id: 3, status: "I love React", name: 'Roman', isFollow: false, location: {
                cityName: 'Minsk', country: 'Belarus'
            },
            avatar: "https://i.pravatar.cc/38"
        },
        {
            id: 4, status: "Wait invite for friends", name: 'Julia', isFollow: false, location: {
                cityName: 'Paris', country: 'France'
            },
            avatar: "https://i.pravatar.cc/38"
        }
    ]
}

export const usersReducer =
    (state: UsersStateType = initialState,
     action: UsersActionsType): UsersStateType => {
        switch (action.type) {
            case TOGGLE_FOLLOW:
                return {
                    ...state, users: state.users.map(us => {
                        return us.id === action.payload.id ? {...us, isFollow:
                                !us.isFollow} : us
                    })
                }
            case SET_USERS:
                return {
                    ...state, users: [...state.users, ...action.payload.users]
                }

            default:
                return state
        }
    }


export type ToggleFollowACType = {
    type: 'TOGGLE-FOLLOW'
    payload: {
        id: number
    }
}

export type SetUsersACType = {
    type: 'SET-USERS'
    payload: {
        users: UserStateType[]
    }
}

export type UsersActionsType = ToggleFollowACType | SetUsersACType

export const toggleFollowAC = (id: number): ToggleFollowACType => {
    return {
        type: TOGGLE_FOLLOW,
        payload: {
            id
        }
    }
}

export const setUsersAC = (users: UserStateType[]): SetUsersACType => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    }
}

