import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store} from "redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App
            friends={store.getState().friends}
        />
    </Provider>
    , document.getElementById('root')
)


