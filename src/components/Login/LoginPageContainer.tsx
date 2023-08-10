import React from 'react'
import {connect} from 'react-redux'
import {LoginPage} from './LoginPage'
import {submitFormTC} from 'redux/authReducer'
import {AppStateType} from 'redux/redux-store'

const objForMapDispatchToProps = {
    submitForm: submitFormTC,
}

type MapStateToProps = {
    isAuth: boolean
}

const mpstp = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuthorized,
    }
}

export const LoginPageContainer = connect(
    mpstp,
    objForMapDispatchToProps,
)(LoginPage)
