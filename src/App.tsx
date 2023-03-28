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
import {cbAddPost, StateType} from "./redux/State";
import {message} from "antd";


export type AppPropsType = {
    state: StateType
    cbAddPost: (post: string) => void
    cbSendMessage: (message: string, hostUserId: number) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar friends={props.state.friends}/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>

                    <Route path={'/dialogs'} render={() =>
                        <Dialogs state={props.state.dialogsPage}
                                 cbSendMessage={props.cbSendMessage}
                        />}/>

                    <Route path={'/profile'} render={() =>
                        <Profile state={props.state.profilePage}
                                 cbAddPost={props.cbAddPost}
                        />}/>

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
