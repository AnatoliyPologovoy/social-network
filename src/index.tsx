import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {cbSendMessage, cbAddPost, State} from "./redux/State";


ReactDOM.render(
    <App
        state={State}
        cbAddPost={cbAddPost}
        cbSendMessage={cbSendMessage}
    />,
  document.getElementById('root')
);