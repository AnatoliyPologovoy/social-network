import avatar1 from "../img/maxim-ava.jpg";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../DAL/API";

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

//posts types
export type PostItemType = {
    id: number,
    text: string,
    likes: number
}
export type PostsType = PostItemType[]
//profile types
export type PersonDataType = {
    age: number
    name: string
    id: number
    avatar: string
    mainImg: string
}

export type ProfilePageType = {
    postsData: PostsType
    postText: string
    personData: PersonDataType
    currentProfile: CurrentProfileDomainType
    status: string
}

export type CurrentProfileDomainType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
} | null

let initialState: ProfilePageType = {
    postsData: [
        {id: 1, text: "Hello, world!", likes: 11},
        {id: 2, text: "This is my new post", likes: 5},
        {id: 3, text: "I love React", likes: 125},
    ],
    postText: '',
    personData: {
        age: 20,
        name: 'Anatoliy',
        id: 1,
        avatar: avatar1,
        mainImg: "https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
    },
    currentProfile: null,
    status: ''
}

export type ActionAddPostType = {
    type: 'ADD-POST'
    post: string
}

export type ProfileActions = ActionAddPostType | setCurrentProfile |
    setProfileStatusType

export const profileReducer =
    (state: ProfilePageType = initialState,
     action: ProfileActions): ProfilePageType => {
        switch (action.type) {
            case "ADD-POST":
                const posts = state.postsData
                const newPost: PostItemType = {
                    id: posts[posts.length - 1].id + 1,
                    text: action.post,
                    likes: 0
                }
                const copyState = {
                    ...state, postsData: [
                        ...state.postsData, newPost
                    ]
                }
                copyState.postText = '' //cleaning textarea after send
                return copyState
            case "SET_CURRENT_PROFILE":
                return {...state, currentProfile: action.profile}
            case "SET_PROFILE_STATUS" :
                return {...state, status: action.status}
            default:
                return state
        }
    }

export const addPostActionCreation =
    (post: string): ActionAddPostType => ({type: addPost, post})

export const setCurrenProfileAC = (profile: CurrentProfileDomainType) => {
    return {
        type: SET_CURRENT_PROFILE,
        profile
    } as const
}
export type setCurrentProfile = ReturnType<typeof setCurrenProfileAC>

export const setProfileStatusAC = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    } as const
}

export type setProfileStatusType = ReturnType<typeof setProfileStatusAC>


//thunks

export const setUserProfileTC= (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => dispatch(setCurrenProfileAC(data)))
    }
}

export const setProfileStatusTC = (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(data => {
                data = data || 'No status'
                dispatch(setProfileStatusAC(data))
            })
    }
}



// export type setUserProfileType = ReturnType<typeof setUserProfileTC>


