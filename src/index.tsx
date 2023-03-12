import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import avatar1 from "./img/maxim-ava.jpg";

//dialogs types
export type ItemDialogsType = {
    id: number
    name: string
}
export type DialogsDataType = ItemDialogsType[];
//messages types
export type ItemMessagesType = {
    author : AuthorMessagesType
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
    id : number,
    message : string,
    likes : number
}
export type PostsType = PostItemType[]
//profile types
export type PersonDataType = {
    age: number
    name: string
    id: number
    avatar: string
}

//Data
let dialogsData : DialogsDataType = [
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
];
let messagesData : MessagesDataType = [
    {
        author: {
            name: 'Valeria',
            avatar: ''
        },
        text: 'hello',
        time: '22:00'
    },
    {
        author: {
            name: 'me',
            avatar: ''
        },
        text: 'hi',
        time: '22:01'
    },
    {
        author: {
            name: 'Valeria',
            avatar: ''
        },
        text: 'how are you',
        time: '22:02'
    },
    {
        author: {
            name: 'me',
            avatar: ''
        },
        text: 'i am fine',
        time: '22:03'
    }
];
let postsData : PostsType = [
    {id : 1, message : "Hello, world!", likes : 11},
    {id : 2, message : "This is my new post", likes : 5},
    {id : 3, message : "I love React", likes : 125},
]
let personData : PersonDataType = {
    age: 20,
    name: 'Maxim',
    id: 1,
    avatar: avatar1
}


ReactDOM.render(
    <App
        dialogsData={dialogsData}
        messagesData={messagesData}
        postsData={postsData}
        personData={personData}
    />,
  document.getElementById('root')
);