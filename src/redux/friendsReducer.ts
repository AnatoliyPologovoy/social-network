import {FriendType} from "./State";

export type ActionFriendsType = {
    type: string
}

let initialState:FriendType[] = [
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

export const friendsReducer =
    (state = initialState, action:ActionFriendsType) => {
    return state
}