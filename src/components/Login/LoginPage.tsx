import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Button} from "antd";

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    );
}


const LoginForm = () => {
    return (
        <form>
            <Field name={'Login'} component={'input'}/>
            <Field name={'password'} component={'input'}/>
            <Field name={'remembeMe'} type={'checkbox'} component={'input'}/>
            <Button>Отправить</Button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

