import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import cl from './loginPage.module.css'
import {CustomInput} from 'components/common/CustomInput/CustomInput'
import {email, required} from 'utils/validate'
import {FormLoginData} from 'redux/authReducer'
import {Redirect} from 'react-router-dom'
import {Button, Checkbox} from 'antd'
import {guestLoginResponseData} from 'constants/index'

type LoginPageType = {
    submitForm: (formData: FormLoginData) => void
    isAuth: boolean
    captchaUrl: string | null
}

export const LoginPage: FC<LoginPageType> = (props) => {
    const onSubmit = (formData: FormLoginData) => {
        props.submitForm(formData)
    }

    const guestLogin = () => {
        props.submitForm(guestLoginResponseData)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={cl.loginPage}>
            <h1>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                guestLogin={guestLogin}
                captchaUrl={props.captchaUrl}
            />
        </div>
    )
}

type LoginFormPropsType = {
    guestLogin: () => void
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormLoginData, LoginFormPropsType> & LoginFormPropsType> = (props) => {
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
                <Field
                    name={'rememberMe'}
                    component={Checkbox}
                />
                <span>remember me</span>
            </div>
            {/*Errors*/}
            {props.error && <p style={{color: 'red'}}>{props.error}</p>}
            {/*Captcha*/}
            {props.captchaUrl &&
                <img
                    src={props.captchaUrl}
                    alt='captcha'
                    width={200}
                    height={100}
                />}
            {/*Captcha field*/}
            {props.captchaUrl &&
                <div className={cl.formField}>
                    <Field
                        name={'captcha'}
                        placeholder={'Captcha'}
                        component={CustomInput}
                        tag={'input'}
                        validate={[required]}
                    />
                </div>
            }
            <div className={cl.buttonWrapper}>
                <Button size={'small'} htmlType='submit'>
                    Sign in
                </Button>
                <Button size={'small'} ghost onClick={props.guestLogin}>
                    Guest login
                </Button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormLoginData, LoginFormPropsType>({
    //unique name for the form
    form: 'login',
})(LoginForm)
