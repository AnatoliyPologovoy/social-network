import ReactDOM from "react-dom";
import App from "./App";
import {cbAddPost, cbSendMessage, changeInputPostText, observer, State, StateType} from "./redux/State";
import React from "react";

export const reRenderEntireTree = (State:StateType) => {
    ReactDOM.render(
        <App
            state={State}
            cbAddPost={cbAddPost}
            cbSendMessage={cbSendMessage}
            changeInputPost={changeInputPostText}
        />,
        document.getElementById('root')
    )
}

reRenderEntireTree(State)
observer(()=>{reRenderEntireTree(State)})


