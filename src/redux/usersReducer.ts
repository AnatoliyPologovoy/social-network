const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

export type UserStateType = {
    id: number
    name: string
    followed: boolean
    status: string | null
//     avatar: string
//     location: {
//         cityName: string
//         country: string
//     }
// }
    photos?: {
        small: string | null
        large: string | null
    }
    uniqueUrlName?: string | null
}

export type UsersStateType = {
    users: UserStateType[]
    totalCountUsers: number
    usersPerPage: number
    currentPage: number
    maxPage: number
    isFetching: boolean
}

let initialState: UsersStateType = {
    users: [
        {
            id: 1, status: "Hello, world!", name: 'Roman', followed: true,
            photos: {
                small: null,
                large: null
            },
            uniqueUrlName: null
        },
        {
            id: 2, status: "This is my new post", name: 'Andrew', followed: true,
            photos: {
                small: null,
                large: null
            },
            uniqueUrlName: null
        },
        {
            id: 3, status: "I love React", name: 'Roman', followed: false,
            photos: {
                small: null,
                large: null
            },
            uniqueUrlName: null
        },
        {
            id: 4, status: "Wait invite for friends", name: 'Julia', followed: false,
            photos: {
                small: null,
                large: null
            },
            uniqueUrlName: null
        }
    ],
    totalCountUsers: 0,
    usersPerPage: 8,
    currentPage: 1,
    maxPage: 20,
    isFetching: false
}

export const usersReducer =
    (state: UsersStateType = initialState,
     action: UsersActionsType): UsersStateType => {
        switch (action.type) {
            case TOGGLE_FOLLOW:
                return {
                    ...state, users: state.users.map(us => {
                        return us.id === action.payload.id ? {
                            ...us, followed:
                                !us.followed
                        } : us
                    })
                }
            case SET_USERS:
                return {
                    ...state, users: [...action.payload.users]
                }
            case SET_TOTAL_COUNT_USERS:
                return {...state, totalCountUsers: action.payload.totalCount}
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.payload.page}
            case SET_IS_FETCHING:
                return {...state, isFetching: action.payload.value}
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

export type UsersActionsType =
    ToggleFollowACType | SetUsersACType | SetTotalCountACType
    | SetCurrentPageACType | SetIsFetching

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

export const setTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT_USERS,
        payload: {
            totalCount
        }
    } as const
}
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

export const setCurrentPageAC = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            page
        }
    } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setIsFetchingAC = (value: boolean) => {
    return {
        type: SET_IS_FETCHING,
        payload: {
            value
        }
    } as const
}
type SetIsFetching = ReturnType<typeof setIsFetchingAC>
