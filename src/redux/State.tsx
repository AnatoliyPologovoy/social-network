import avatar1 from "../img/maxim-ava.jpg";

export let renderEntireTree = () => {

}


//dialogs types
export type ItemDialogsType = {
    id: number
    name: string
}
export type DialogsDataType = ItemDialogsType[];
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
//Pages type
export type DialogsPageType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
}
export type ProfilePageType = {
    postsData: PostsType
    postText: string
    personData: PersonDataType
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
// OBJECT
export let State = {
    dialogsPage: {
        dialogsData: [
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
            }
        ],
        messagesData: {
            users: {
                host: {
                    id: 1,
                    userId: 111,
                    name: 'Anatoliy',
                    avatar: "https://i.pravatar.cc/30?u=fake@pravatar.com"
                },
                companion: {
                    id: 2,
                    userId: 222,
                    name: 'Valeria',
                    avatar: 'https://i.pravatar.cc/30'
                }
            },
            messages: [
                {
                    id: 1,
                    userId: 222,
                    text: 'hello',
                    time: '22:00'
                },
                {
                    id: 2,
                    userId: 111,
                    text: 'hi',
                    time: '22:01'
                },
                {
                    id: 3,
                    userId: 222,
                    text: 'how are you',
                    time: '22:02'
                },
                {
                    id: 4,
                    userId: 111,
                    text: 'i am fine',
                    time: '22:03'
                }
            ]
        }
    },
    profilePage: {
        postsData: [
            {id: 1, text: "Hello, world!", likes: 11},
            {id: 2, text: "This is my new post", likes: 5},
            {id: 3, text: "I love React", likes: 125},
        ],
        postText: '',
        personData: {
            age: 20,
            name: 'Maxim',
            id: 1,
            avatar: avatar1,
            mainImg: "https://n1s2.hsmedia.ru/60/b5/cc/60b5cc5266a98b966e2f35c57ed388c8/690x380_0x0a330c2a_12567029551616070388.jpeg"
        }
    },
    friends: [
        {
            id: 1,
            name: 'Valeria',
            avatar: "https://i.pravatar.cc/50"
        },
        {
            id: 2,
            name: 'Roman',
            avatar: "https://i.pravatar.cc/50?u=fake@pravatar.com"
        },
        {
            id: 3,
            name: 'Andrey',
            avatar: "https://i.pravatar.cc/50"
        },
        {
            id: 4,
            name: 'Kostya',
            avatar: "https://i.pravatar.cc/50?u=fake@pravatar.com"
        },
        {
            id: 5,
            name: 'Sasha',
            avatar: "https://i.pravatar.cc/50"
        }
    ]
}

export const changeInputPostText = (text: string) => {
    State = {...State, profilePage: {...State.profilePage, postText: text}}
    renderEntireTree()
}

export const cbAddPost = () => {
    const posts = State.profilePage.postsData
    const postText = State.profilePage.postText
    const newPost = {
        id: posts[posts.length - 1].id + 1,
        text: postText,
        likes: 0
    }
    State.profilePage.postText = '' //cleaning textarea after send
    State = {
        ...State, profilePage:
            {
                ...State.profilePage, postsData:
                    [...State.profilePage.postsData, newPost]
            }
    }
    renderEntireTree()
}

export const cbSendMessage = (message: string, hostUserId: number) => {
    const messages = State.dialogsPage.messagesData.messages
    const newMessage = {
        id: messages[messages.length - 1].id + 1,
        userId: hostUserId,
        text: message,
        time: new Date().toLocaleTimeString().slice(0, -3)
    }
    State = {
        ...State, dialogsPage:
            {
                ...State.dialogsPage, messagesData: {
                    ...State.dialogsPage.messagesData, messages:
                        [...State.dialogsPage.messagesData.messages, newMessage]
                }
            }
    }
    renderEntireTree()
}




export const observer = (observer: () => void) => {
    console.log('renderEntireTree is now having anchor to reRenderEntireTree from index')
    renderEntireTree = observer
}

