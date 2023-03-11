import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";

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


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>
                    <Route path={'/dialogs'} render={ ()=> <Dialogs dialogsData={dialogsData} messagesData={messagesData}/> }/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
