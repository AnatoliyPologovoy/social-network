import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/State";
import {Provider} from "./redux/StoreContext";

const reRenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                store={store}
            />
        </Provider>
        , document.getElementById('root')

    )
}

reRenderEntireTree(store)
store.subscribe(() => reRenderEntireTree(store))


