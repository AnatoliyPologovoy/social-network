import axios from "axios";

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
        return instance.get(requestUrl)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.delete(requestUrl)
            .then(response => response.data)
    },
    follow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance.post(requestUrl)
            .then(response => response.data)
    }
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
    }

}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get('profile/' + userId)
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