import React, {FC} from 'react';
import {CurrentProfileDomainType} from "../../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ReactComponent as SaveIcon} from "../../../../assets/ok-btn.svg";
import cl from "../personData.module.css";
import {CustomInput} from "../../../common/CustomInput";

type ProfileEditFormProps = {
    currentProfile: CurrentProfileDomainType
    toggleEditMode: () => void
}

export const ProfileEditForm: FC<ProfileEditFormProps> = ({currentProfile, toggleEditMode}) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
        toggleEditMode()
    }

    return <>
        <EditProfileReduxForm
            onSubmit={onSubmit}
            currentProfile={currentProfile}
        />
    </>
}

type EditFormPropsType = {
    currentProfile: CurrentProfileDomainType
}

const EditForm: React.FC<InjectedFormProps<any, EditFormPropsType> & EditFormPropsType> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <label htmlFor='submit'>
            <SaveIcon className={cl.statusIcon + ' ' + cl.aboutMeIcon}/>
        </label>
        <input type={'submit'} id={'submit'} className={cl.inputSubmit}/>
        <div>
            <b>About me:</b>
            <Field
                name={'aboutMe'}
                placeholder={'About me'}
                component={CustomInput}
                tag={'input'}
                validate={[]}
            />
        </div>
        <div>
            <b>Looking for a job:</b>
            <Field
                name={'lookingForAJob'}
                component={'input'}
                type={'checkbox'}
            />

        </div>
        <div>
            <Field
                name={'lookingForAJobDescription'}
                placeholder={'Looking for a job description'}
                component={CustomInput}
                tag={'textarea'}
                validate={[]}
            />
        </div>
        <div>
            {Object.keys(props.currentProfile.contacts).map((key, i) => {
                return <div key={i}>
                    <b>{key}:</b>
                    <Field
                        name={'contacts.' + key}
                        placeholder={key}
                        component={CustomInput}
                        tag={'input'}
                        validate={[]}
                    />
                </div>
            })}
        </div>
    </form>
}

const EditProfileReduxForm = reduxForm<any, EditFormPropsType>({
    //unique name for the form
    form: 'editProfile'
})(EditForm)