import {AppThunk} from './redux-store'
import {profileAPI, UpdateProfileAboutMeResponseType} from 'DAL/API'
import {ProfileFormType} from 'components/Profile/PersonData/ProfileEditForm/ProfileEditForm'

const ADD_POST = 'ADD-POST'
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_PROFILE_PHOTOS = 'SET_PROFILE_PHOTOS'
const SET_ON_CLICK = 'SET_ON_CLICK'

//posts types
export type PostItemType = {
    id: number
    text: string
    likes: number
    isOnClick: boolean
}
export type PostsType = PostItemType[]
//profile types
export type ProfilePageType = {
    postsData: PostsType
    postText: string
    currentProfile: ProfileDomainType
    status: string
}

export type ProfilePhotos = {
    small: string | null
    large: string | null
}

export type SocialProfile = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileDomainType = {
    userId: number | null
    aboutMe: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: SocialProfile
    photos: ProfilePhotos
}

let initialState: ProfilePageType = {
    postsData: [
        {id: 1, text: 'Hello, world!', likes: 11, isOnClick: false},
        {id: 2, text: 'This is my new post', likes: 5, isOnClick: false},
        {id: 3, text: 'I love React', likes: 125, isOnClick: false},
    ],
    postText: '',
    currentProfile: {
        userId: null,
        aboutMe: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        },
    },
    status: '',
}

export type ActionAddPostType = {
    type: 'ADD-POST'
    post: string
}

export type ProfileActions =
    | ActionAddPostType
    | setCurrentProfile
    | setProfileStatusType
    | setProfilePhotoType
    | setOnClickType

export const profileReducer = (
    state: ProfilePageType = initialState,
    action: ProfileActions,
): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const posts = state.postsData
            const newPost: PostItemType = {
                id: posts[posts.length - 1].id + 1,
                text: action.post,
                likes: 0,
                isOnClick: false,
            }
            const copyState = {
                ...state,
                postsData: [...state.postsData, newPost],
            }
            copyState.postText = '' //cleaning textarea after send
            return copyState
        case 'SET_CURRENT_PROFILE':
            return {...state, currentProfile: action.profile}
        case 'SET_PROFILE_STATUS':
            return {...state, status: action.status}
        case 'SET_PROFILE_PHOTOS':
            return {
                ...state,
                currentProfile: {
                    ...state.currentProfile,
                    photos: {...action.payload},
                },
            }
        case 'SET_ON_CLICK':
            return {
                ...state,
                postsData: state.postsData.map(post => {
                    if (post.id === action.payload) {
                        return post.isOnClick
                            ? {...post, likes: post.likes - 1, isOnClick: false}
                            : {...post, likes: post.likes + 1, isOnClick: true}
                    }
                    return post
                }),
            }
        default:
            return state
    }
}

export const addPostActionCreation = (post: string): ActionAddPostType => ({
    type: ADD_POST,
    post,
})

export const setCurrenProfileAC = (profile: ProfileDomainType) => {
    return {
        type: SET_CURRENT_PROFILE,
        profile,
    } as const
}
export type setCurrentProfile = ReturnType<typeof setCurrenProfileAC>

export const setProfileStatusAC = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status,
    } as const
}

export type setProfileStatusType = ReturnType<typeof setProfileStatusAC>

export const setProfilePhotoAC = (photos: ProfilePhotos) => {
    return {
        type: SET_PROFILE_PHOTOS,
        payload: photos,
    } as const
}

export type setProfilePhotoType = ReturnType<typeof setProfilePhotoAC>

export const setOnClick = (postId: number) => {
    return {
        type: SET_ON_CLICK,
        payload: postId,
    } as const
}

export type setOnClickType = ReturnType<typeof setOnClick>


//thunks

export const getUserProfileTC = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await profileAPI.getProfile(userId)
            dispatch(setCurrenProfileAC(data))
        } catch (e) {
            console.log(e)
            //need errors handler
        }
    }
}

export const updateUserProfileStatusTC = (status: string): AppThunk => {
    return async (dispatch) => {
        try {
            const data = await profileAPI.updateProfileStatus(status)
            if (data.resultCode === 0) {
                dispatch(setProfileStatusAC(status))
            }
        } catch (e) {
            console.log(e)
            //need errors handler
        }
    }
}

export const getProfileStatusTC = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.getProfileStatus(userId)
            data = data || 'No status'
            dispatch(setProfileStatusAC(data))
        } catch (e) {
            console.log(e)
            //need errors handler
        }
    }
}

export const updateProfilePhotoTC = (photo: File): AppThunk => {
    return async (dispatch) => {
        try {
            let data = await profileAPI.updateProfilePhoto(photo)
            if (data.resultCode === 0) {
                dispatch(setProfilePhotoAC(data.data.photos))
            }
        } catch (e) {
            console.log(e)
            //need errors handler
        }
    }
}

export const updateProfileAboutMeTC = (profileData: ProfileFormType): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().profilePage.currentProfile.userId
        const responseProfileData: UpdateProfileAboutMeResponseType = {
            ...profileData,
            userId,
        }
        try {
            let data = await profileAPI.updateProfileAboutMe(responseProfileData)
            if (data.resultCode === 0 && userId) {
                dispatch(getUserProfileTC(userId.toString()))
            }
        } catch (e) {
            console.log(e)
            //need errors handler
        }
    }
}
