import React from "react";
import {Login} from "./Login";
import {connect} from "react-redux";
import {AppStateType} from "redux/redux-store";
import {authMeTC, logoutTC} from "redux/authReducer";

export type LoginContainerPropsType = {
    isAuthorized: boolean
    login: string | null
    authMe: () => void
    logOut: () => void
}

class LoginContainer extends React.Component<LoginContainerPropsType, {}> {
    // componentDidMount() {
    //     console.log('LoginContainer did mount')
    //     this.props.authMe()
    // }

    render() {
        return (
            <Login {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.data.login
})
export default connect(mapStateToProps, {
    authMe: authMeTC,
    logOut: logoutTC

})(LoginContainer)

