import React from "react";
import {Login} from "./Login";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthUserDataType, setAuthUserDataAC, setIsAuthorizedAC} from "../../redux/authReducer";

export type LoginContainerPropsType = {
    isAuthorized: boolean
    login: string | null
    setAuthUserData: (data: AuthUserDataType) => void
    setIsAuth: (value: boolean) => void
}

class LoginContainer extends React.Component<LoginContainerPropsType, {}> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                    this.props.setIsAuth(true)
                }
            })
    }

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
    setAuthUserData: setAuthUserDataAC,
    setIsAuth: setIsAuthorizedAC
})(LoginContainer)

