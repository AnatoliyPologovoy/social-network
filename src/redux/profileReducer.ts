import {ActionAddPostType, ActionChangeInputPostTextType, ActionTypes, PostItemType, ProfilePageType} from "./State";
import avatar1 from "../img/maxim-ava.jpg";

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'

let initialState = {
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
    }
}

export const profileReducer =
    (state: ProfilePageType = initialState,
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