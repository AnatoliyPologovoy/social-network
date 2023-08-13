import React from 'react'
import {connect} from 'react-redux'
import {LoginPage} from './LoginPage'
import {loginTC} from 'redux/authReducer'
import {AppStateType} from 'redux/redux-store'

const objForMapDispatchToProps = {
    submitForm: loginTC,
}

type MapStateToProps = {
    isAuth: boolean
    captchaUrl: string | null
}

const mpstp = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuthorized,
        captchaUrl: state.auth.captchaUrl
    }
}

export const LoginPageContainer = connect(
    mpstp,
    objForMapDispatchToProps,
)(LoginPage)
