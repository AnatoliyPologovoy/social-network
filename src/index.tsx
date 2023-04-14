import ReactDOM from "react-dom";
import App from "./App";

import React from "react";
import {store} from "./redux/redux-store";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    )
}

reRenderEntireTree()
store.subscribe(reRenderEntireTree)


