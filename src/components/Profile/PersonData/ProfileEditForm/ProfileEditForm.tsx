import React, {FC} from 'react'
import {ProfileDomainType, updateProfileAboutMeTC} from 'redux/profileReducer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {ReactComponent as SaveIcon} from '../../../../assets/ok-btn.svg'
import cl from '../personData.module.css'
import {CustomInput} from 'components/common/CustomInput/CustomInput'
import {useDispatch} from 'react-redux'
import {AppDispatch} from 'redux/redux-store'

type ProfileEditFormProps = {
    currentProfile: ProfileDomainType
    toggleEditMode: () => void
}

export const ProfileEditForm: FC<ProfileEditFormProps> = ({
    currentProfile,
    toggleEditMode,
}) => {
    const dispatch = useDispatch<AppDispatch>()
    const onSubmit = (formData: ProfileFormType) => {
        console.log(formData)
        dispatch(updateProfileAboutMeTC(formData))
        toggleEditMode()
    }
    const currentProfileWithoutPhotos: Partial<ProfileDomainType> = {...currentProfile}
    delete currentProfileWithoutPhotos['photos']
    return (
        <>
            <EditProfileReduxForm
                onSubmit={onSubmit}
                currentProfile={currentProfile}
                initialValues={currentProfileWithoutPhotos}
            />
        </>
    )
}

type EditFormPropsType = {
    currentProfile: ProfileDomainType
}

export type ProfileFormType = Omit<ProfileDomainType, 'photos' | 'userId'>

const EditForm: React.FC<
    InjectedFormProps<ProfileFormType, EditFormPropsType> & EditFormPropsType
> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="submit">
                <SaveIcon className={cl.statusIcon + ' ' + cl.aboutMeIcon} />
            </label>
            <input type={'submit'} id={'submit'} className={cl.inputSubmit} />
            <div className={cl.profileFormItem}>
                <b>About me:</b>
                <Field
                    name={'aboutMe'}
                    placeholder={'About me'}
                    component={CustomInput}
                    tag={'input'}
                    validate={[]}
                />
            </div>
            <div className={cl.profileFormItem}>
                <b>Full name:</b>
                <Field
                    name={'fullName'}
                    placeholder={'Full name'}
                    component={CustomInput}
                    tag={'input'}
                    validate={[]}
                />
            </div>
            <div className={cl.profileFormItem}>
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
                    return (
                        <div key={i} className={cl.profileFormItem}>
                            <b>{key}:</b>
                            <Field
                                name={'contacts.' + key}
                                placeholder={key}
                                component={CustomInput}
                                tag={'input'}
                                validate={[]}
                            />
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const EditProfileReduxForm = reduxForm<ProfileFormType, EditFormPropsType>({
    form: 'editProfile',
})(EditForm)
