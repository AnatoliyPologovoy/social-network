import avatar1 from "../img/maxim-ava.jpg";

//dialogs types
export type ItemDialogsType = {
    id: number
    name: string
}
export type DialogsDataType = ItemDialogsType[];
//messages types
export type ItemMessagesType = {
    author: AuthorMessagesType
    text: string
    time: string
}
export type AuthorMessagesType = {
    name: string
    avatar: string
}
export type MessagesDataType = ItemMessagesType[];
//posts types
export type PostItemType = {
    id: number,
    message: string,
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
        messagesData: [
            {
                author: {
                    name: 'Valeria',
                    avatar: 'https://i.pravatar.cc/30'
                },
                text: 'hello',
                time: '22:00'
            },
            {
                author: {
                    name: 'me',
                    avatar: "https://i.pravatar.cc/30?u=fake@pravatar.com"
                },
                text: 'hi',
                time: '22:01'
            },
            {
                author: {
                    name: 'Valeria',
                    avatar: 'https://i.pravatar.cc/30'
                },
                text: 'how are you',
                time: '22:02'
            },
            {
                author: {
                    name: 'me',
                    avatar: "https://i.pravatar.cc/30?u=fake@pravatar.com"
                },
                text: 'i am fine',
                time: '22:03'
            }
        ]
    },
    profilePage: {
        postsData: [
            {id: 1, message: "Hello, world!", likes: 11},
            {id: 2, message: "This is my new post", likes: 5},
            {id: 3, message: "I love React", likes: 125},
        ],
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


