import React, {FC} from 'react';
import {Field, reduxForm} from "redux-form";
import cl from './loginPage.module.css'
import {CustomInput} from "components/common/CustomInput";
import {email, required} from "utils/validate";
import {FormLoginData} from "redux/authReducer";
import {Redirect} from "react-router-dom";

type LoginPageType = {
    submitForm: (formData: FormLoginData) => void
    isAuth: boolean
}

export const LoginPage: FC<LoginPageType> = (props) => {

    const onSubmit = (formData: any) => {
        props.submitForm(formData) //dispatch submitFormTC
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={cl.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={
               onSubmit
            }
            />
        </div>
    );
}

type LoginFormProps = {
    handleSubmit: any
}


const LoginForm: React.FC<LoginFormProps> = (props) => {

    return (
        <form className={cl.loginForm} onSubmit={props.handleSubmit}>
            <div className={cl.formField}>
                <Field
                    name={'email'}
                    placeholder={'email'}
                    component={CustomInput}
                    tag={'input'}
                    validate={[required, email]}
                />
            </div>
            <div className={cl.formField}>
                <Field
                    name={'password'}
                    placeholder={'password'}
                    component={CustomInput}
                    tag={'input'}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            <div className={cl.formField}>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/>
                remember me
            </div>
            <button>Отправить</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    //unique name for the form
    form: 'login'
})(LoginForm)

