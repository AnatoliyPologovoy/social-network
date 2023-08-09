import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
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

    const onSubmit = (formData: FormLoginData) => {
        props.submitForm(formData) //dispatch submitFormTC
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={cl.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}


const LoginForm: React.FC<InjectedFormProps<FormLoginData>> = (props) => {

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
            {/*Error from server*/}
            {props.error && <p style={{color: 'red'}}>{props.error}</p>}
            <button>Отправить</button>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormLoginData>({
    //unique name for the form
    form: 'login'
})(LoginForm)

