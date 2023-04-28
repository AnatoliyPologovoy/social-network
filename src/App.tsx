import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {FriendType} from "./redux/State";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


export type AppPropsType = {
    friends: FriendType[]
}

function App (props: AppPropsType) {
    // const stateFriends = props.store.getState().friends

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar friends={props.friends}/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>

                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer //store={props.store}
                        />}/>

                    <Route path={'/profile'} render={() =>
                        <ProfileContainer //store={props.store}
                        />}/>

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/users'} component={UsersContainer}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
