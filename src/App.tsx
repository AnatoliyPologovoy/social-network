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
import {StateType} from "./redux/State";


export type AppPropsType = {
    state: StateType
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Sidebar/>
                <div className="main_section">
                    <Route path={'/news'} component={News}/>

                    <Route path={'/dialogs'} render={() =>
                        <Dialogs state={props.state.dialogsPage}/>}/>

                    <Route path={'/profile'} render={() =>
                        <Profile state={props.state.profilePage}/>}/>

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
