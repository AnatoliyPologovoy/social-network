import React from 'react';
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {submitFormTC} from "redux/authReducer";


const objForMapDispatchToProps = {
    submitForm: submitFormTC
}

export const LoginPageContainer =
    connect(null, objForMapDispatchToProps)(LoginPage)

