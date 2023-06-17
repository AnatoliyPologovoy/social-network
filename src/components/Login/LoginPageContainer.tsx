import React from 'react';
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {submitFormTC} from "../../redux/authReducer";

const mapStateToProps = () => {}

const objForMapDispatchToProps = {
    submitForm: submitFormTC
}

export const LoginPageContainer =
    connect(mapStateToProps, objForMapDispatchToProps)(LoginPage)

