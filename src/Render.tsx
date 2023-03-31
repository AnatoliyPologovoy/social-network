import ReactDOM from "react-dom";
import App from "./App";
import {cbAddPost, cbSendMessage, StateType} from "./redux/State";
import React from "react";

export const renderEntireTree = (State:StateType) => {
    ReactDOM.render(
        <App
            state={State}
            cbAddPost={cbAddPost}
            cbSendMessage={cbSendMessage}
        />,
        document.getElementById('root')
    )
}