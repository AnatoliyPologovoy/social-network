import {ActionAddPostType, ActionChangeInputPostTextType, ActionsTypeProfileAndDialogsPages, PostItemType, ProfilePageType} from "./State";
import avatar1 from "../img/maxim-ava.jpg";

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'

export type ProfileType = {
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
    currentProfile: null

}

export const profileReducer =
    (state: ProfilePageType = initialState,
     action: ActionsTypeProfileAndDialogsPages): ProfilePageType => {
        switch (action.type) {
            case "ADD-POST":
                const posts = state.postsData
                const newPost: PostItemType = {
                    id: posts[posts.length - 1].id + 1,
                    text: state.postText,
                    likes: 0
                }
                const copyState = {
                    ...state, postsData: [
                        ...state.postsData, newPost
                    ]
                }
                copyState.postText = '' //cleaning textarea after send
                return copyState
            case "CHANGE-INPUT-POST-TEXT":
                return {...state, postText: action.text}
            case "SET_CURRENT_PROFILE":
                return {...state, currentProfile: action.profile}
            default:
                return state
        }
    }

export const changeInputPostTextActionCreation =
    (newText: string): ActionChangeInputPostTextType => {
        return {
            type: changeInputPostText,
            text: newText
        }
    }
export const addPostActionCreation =
    (): ActionAddPostType => ({type: addPost})

export const setCurrenProfileAC = (profile: ProfileType) => {
    return {
        type: SET_CURRENT_PROFILE,
        profile
    } as const
}
export type setCurrentProfile = ReturnType<typeof setCurrenProfileAC>