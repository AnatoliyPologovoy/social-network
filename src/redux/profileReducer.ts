import {ActionAddPostType, ActionChangeInputPostTextType, ActionTypes, PostItemType, ProfilePageType} from "./State";

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'

export const profileReducer =
    (state: ProfilePageType,
     action: ActionTypes): ProfilePageType => {
        switch (action.type) {
            case "ADD-POST":
                const posts = state.postsData
                const postText = state.postText
                const newPost: PostItemType = {
                    id: posts[posts.length - 1].id + 1,
                    text: postText,
                    likes: 0
                }
                state.postText = '' //cleaning textarea after send
                state.postsData.push(newPost)
                return state
            case "CHANGE-INPUT-POST-TEXT":
                state.postText = action.text
                return state
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