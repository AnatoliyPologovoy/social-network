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
import {DialogsDataType, MessagesDataType, PersonDataType, PostsType} from "./index";


export type AppPropsType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
    postsData: PostsType
    personData: PersonDataType
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>

                    <Route path={'/dialogs'} render={ ()=>
                        <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>

                    <Route path={'/profile'} render={ () =>
                        <Profile personData={props.personData} postsData={props.postsData}/>} />

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
