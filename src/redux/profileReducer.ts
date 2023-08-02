import avatar1 from "../img/maxim-ava.jpg";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../DAL/API";

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SET_PROFILE_PHOTOS = 'SET_PROFILE_PHOTOS'

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
		currentProfile: CurrentProfileDomainType
		status: string
}

export type ProfilePhotos = {
		small: string | null
		large: string | null
}

export type CurrentProfileDomainType = {
		userId: number | null
		aboutMe: string | null
		lookingForAJob: boolean | null
		lookingForAJobDescription: string | null
		fullName: string | null
		contacts: {
				github: string | null
				vk: string | null
				facebook: string | null
				instagram: string | null
				twitter: string | null
				website: string | null
				youtube: string | null
				mainLink: string | null
		}
		photos: ProfilePhotos
}

let initialState: ProfilePageType = {
		postsData: [
				{id: 1, text: "Hello, world!", likes: 11},
				{id: 2, text: "This is my new post", likes: 5},
				{id: 3, text: "I love React", likes: 125},
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
				}
		},
		status: ''
}

export type ActionAddPostType = {
		type: 'ADD-POST'
		post: string
}

export type ProfileActions = ActionAddPostType | setCurrentProfile |
		setProfileStatusType | setProfilePhotoType

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
						case "SET_PROFILE_PHOTOS":
								return {...state, currentProfile: {
										...state.currentProfile, photos: action.photos
										}}
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

export const setProfilePhotoAC = (photos: ProfilePhotos) => {
		return {
				type: SET_PROFILE_PHOTOS,
				photos
		} as const
}

export type setProfilePhotoType = ReturnType<typeof setProfilePhotoAC>


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
								dispatch(setProfilePhotoAC(data.data))
								console.log('photo upload')
						}
				} catch (e) {
						console.log(e)
						//need errors handler
				}
		}
}



