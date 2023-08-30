import axios from 'axios'
import {ProfileDomainType, ProfilePhotos} from 'redux/profileReducer'
import {UserStateType} from 'redux/usersReducer'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '92e42b1a-9c6c-405e-ad44-73ba793511a6',
    },
})

export const usersAPI = {
    getUsers(usersPerPage: number, pageNumber: number = 1) {
        const requestUrl = 'users?count=' + usersPerPage + '&page=' + pageNumber
        return instance
            .get<ResponseUsersType>(requestUrl)
            .then((response) => response.data)
    },
    getFriends(usersPerPage: number, pageNumber: number = 1) {
        const params = {
            count: usersPerPage,
            page: pageNumber,
            friend: true,
        }
        return instance
            .get<ResponseUsersType>('users', {params})
            .then((response) => response.data)
    },
    unFollow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance
            .delete<ResponseType>(requestUrl)
            .then((response) => response.data)
    },
    follow(userId: number) {
        const requestUrl = 'follow/' + userId
        return instance
            .post<ResponseType>(requestUrl)
            .then((response) => response.data)
    },
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
    captcha?: string | null
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

export type ResponseAuthUserDataType = {
    id: number
    email: string
    login: string
}

export const authAPI = {
    authMe() {
        return instance
            .get<ResponseType<ResponseAuthUserDataType>>('auth/me')
            .then((response) => response.data)
    },
    logIn(loginData: LogInRequestType) {
        return instance
            .post<ResponseType<{userId: number}>>('auth/login', {
                ...loginData,
            })
            .then((res) => res.data)
    },
    logOut() {
        return instance
            .delete<ResponseType<{}>>('auth/login')
            .then((res) => res.data)
    },
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get<{url: string}>('security/get-captcha-url')
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get<ProfileDomainType>('profile/' + userId)
            .then((response) => response.data)
    },
    getProfileStatus(userId: string) {
        return instance.get('profile/status/' + userId).then((res) => res.data)
    },
    updateProfileStatus(status: string) {
        return instance
            .put<ResponseType>('profile/status/', {status})
            .then((res) => res.data)
    },
    updateProfilePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance
            .put<ResponseType<UpdateProfilePhotoResponseType>>(
                'profile/photo',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            )
            .then((res) => res.data)
    },
    updateProfileAboutMe(profileData: UpdateProfileAboutMeResponseType) {
        return instance
            .put<ResponseType<{}>>(
                'profile',
                profileData
            )
            .then((res) => res.data)
    }
}

type UpdateProfilePhotoResponseType = {
    photos: ProfilePhotos
}

export type UpdateProfileAboutMeResponseType = Omit<ProfileDomainType, 'photos'>
