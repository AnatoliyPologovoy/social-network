import {dialogsReducer} from './dialogsReducer'
import {ProfilePageType} from './profileReducer'

//dialogs types
export type NameDialogsType = {
    id: number
    name: string
}
export type DialogsNamesType = NameDialogsType[]
//messages types
export type ItemMessagesType = {
    id: number
    userId: number
    text: string
    time: string
}
export type UserType = {
    id: number
    userId: number
    name: string
    avatar: string
}
export type UsersMessagesType = {
    host: UserType
    companion: UserType
}
export type MessagesDataType = {
    users: UsersMessagesType
    messages: ItemMessagesType[]
}

//Pages type
export type DialogsPageType = {
    dialogsNames: DialogsNamesType
    inputMessage: string
    messagesData: MessagesDataType
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}
//state types
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    friends: FriendType[]
}

//Action type for dispatch

export type ActionChangeInputMessageType = {
    type: 'CHANGE-INPUT-MESSAGE-TEXT'
    text: string
}

export type ActionSendMessage = {
    type: 'SEND-MESSAGE'
}

export type DialogsPagesActions =
    | ActionChangeInputMessageType
    | ActionSendMessage

const changeInputPostText = 'CHANGE-INPUT-POST-TEXT'
const addPost = 'ADD-POST'
const changeInputMessageText = 'CHANGE-INPUT-MESSAGE-TEXT'
const sendMessage = 'SEND-MESSAGE'

//Store type

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: DialogsPagesActions) => void
}

export let Store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsNames: [
                {
                    id: 1,
                    name: 'Valeria',
                },
                {
                    id: 2,
                    name: 'Roman',
                },
                {
                    id: 3,
                    name: 'Andrey',
                },
                {
                    id: 4,
                    name: 'Kostya',
                },
            ],
            inputMessage: '',
            messagesData: {
                users: {
                    host: {
                        id: 1,
                        userId: 111,
                        name: 'Anatoliy',
                        avatar: 'https://i.pravatar.cc/30?u=fake@pravatar.com',
                    },
                    companion: {
                        id: 2,
                        userId: 222,
                        name: 'Valeria',
                        avatar: 'https://i.pravatar.cc/30',
                    },
                },
                messages: [
                    {
                        id: 1,
                        userId: 222,
                        text: 'hello',
                        time: '22:00',
                    },
                    {
                        id: 2,
                        userId: 111,
                        text: 'hi',
                        time: '22:01',
                    },
                    {
                        id: 3,
                        userId: 222,
                        text: 'how are you',
                        time: '22:02',
                    },
                    {
                        id: 4,
                        userId: 111,
                        text: 'i am fine',
                        time: '22:03',
                    },
                ],
            },
        },
        profilePage: {
            postsData: [
                {id: 1, text: 'Hello, world!', likes: 11},
                {id: 2, text: 'This is my new post', likes: 5},
                {id: 3, text: 'I love React', likes: 125},
            ],
            postText: '',
            // personData: {
            //     age: 20,
            //     name: 'Anatoliy',
            //     id: 1,
            //     avatar: avatar1,
            //     mainImg: "https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
            // },
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
        },
        friends: [
            {
                id: 1,
                name: 'Valeria',
                avatar: 'https://i.pravatar.cc/50',
            },
            {
                id: 2,
                name: 'Roman',
                avatar: 'https://i.pravatar.cc/50?u=fake@pravatar.com',
            },
            {
                id: 3,
                name: 'Andrey',
                avatar: 'https://i.pravatar.cc/50',
            },
            {
                id: 4,
                name: 'Kostya',
                avatar: 'https://i.pravatar.cc/50?u=fake@pravatar.com',
            },
            {
                id: 5,
                name: 'Sasha',
                avatar: 'https://i.pravatar.cc/50',
            },
        ],
    },
    _callSubscriber: function () {
        console.log(
            'Render method have not observer. ' +
                'Use method subscribe(observer:()=>void) for add observer to render',
        )
    },
    subscribe: function (observer) {
        this._callSubscriber = observer
    },
    getState: function () {
        return this._state
    },
    dispatch(action: DialogsPagesActions) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action,
        )
        this._callSubscriber()
    },
}
