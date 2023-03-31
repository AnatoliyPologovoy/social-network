import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {cbSendMessage, cbAddPost, State} from "./redux/State";
import {renderEntireTree} from "./Render";


renderEntireTree(State)


