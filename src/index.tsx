import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/State";
// import {Provider} from "./redux/StoreContext";
import { Provider } from "react-redux";


const reRenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                friends={store.getState().friends}
            />
        </Provider>
        , document.getElementById('root')

    )
}

reRenderEntireTree()
store.subscribe(() => reRenderEntireTree())


