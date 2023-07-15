import axios from "axios";
import {CurrentProfileDomainType} from "redux/profileReducer";
import {UserStateType} from "redux/usersReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "92e42b1a-9c6c-405e-ad44-73ba793511a6"
    }
})

export const usersAPI = {
    getUsers(usersPerPage: number, pageNumber: number = 1) {
        const requestUrl = 'users?count=' + usersPerPage
            + '&page=' + pageNumber
        return instance.get<ResponseUsersType>(requestUrl)
            .then(response => response.data)
    },
    getFriends(usersPerPage: number, pageNumber: number = 1) {
        const requestUrl = 'users?count=' + usersPerPage
            + '&page=' + pageNumber + '&friend=true'
        const params = {
            count: usersPerPage,
            page: pageNumber,
            friend: true
        }
        return instance.get<ResponseUsersType>('users', {params})
            .then(response => response.data)
    },
    unFollow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.delete<ResponseType<{}>>(requestUrl)
            .then(response => response.data)
    },
    follow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.post<ResponseType<{}>>(requestUrl)
            .then(response => response.data)
    }
}

type ResponseUsersType = {
    items: UserStateType[]
    error: string | null
    totalCount: number
}

export type LogInRequestType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    logIn(loginData: LogInRequestType) {
        return instance
            .post<ResponseType<{userId: number}>>('auth/login', {...loginData})
            .then(res => res.data)
    },
    logOut() {
        return instance
            .delete<ResponseType<{}>>('auth/login')
            .then(res => res.data)
    }

}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<CurrentProfileDomainType>('profile/' + userId)
            .then(response => response.data)
    },
    getProfileStatus(userId: string) {
        return instance.get('profile/status/' + userId)
            .then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put('profile/status/', {status})
            .then(res => res.data)
    },

}