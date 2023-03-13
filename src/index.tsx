import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from "./redux/State";


ReactDOM.render(
    <App
        state={State}
    />,
  document.getElementById('root')
);