import ReactDOM from "react-dom";
import App from "./App";
import {Store, StoreType} from "./redux/State";
import React from "react";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <App
            store={Store}
        />,
        document.getElementById('root')
    )
}

reRenderEntireTree()
Store.subscribe(reRenderEntireTree)


