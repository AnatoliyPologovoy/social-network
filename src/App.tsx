import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {StoreType} from "./redux/State";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    store: StoreType

}

function App (props: AppPropsType) {
    const stateFriends = props.store.getState().friends

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar friends={stateFriends}/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>

                    <Route path={'/dialogs'} render={() =>
                        <DialogsContainer //store={props.store}
                        />}/>

                    <Route path={'/profile'} render={() =>
                        <ProfileContainer //store={props.store}
                        />}/>

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
