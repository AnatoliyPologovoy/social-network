import React from 'react'
import cl from './addpost.module.css'
import {Field, reduxForm, reset} from 'redux-form'
import {maxLengthCreator, required} from 'utils/validate'
import {CustomInput} from 'components/common/CustomInput/CustomInput'
import {Dispatch} from 'redux'
import Button from 'antd/lib/button'
import {SendOutlined} from '@ant-design/icons'

//validate
const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props: {handleSubmit: any; dispatch: Dispatch}) => {
    return (
        <form
            onSubmit={() => {
                props.handleSubmit()
                props.dispatch(reset('profileAddPost'))
            }}
            className={cl.wrapper}
        >
            <Field
                validate={[required, maxLength50]}
                name={'post'}
                className={cl.textarea}
                component={CustomInput}
                tag={'textarea'}
            />
            <Button className={cl.btnSend}
                    icon={<SendOutlined rev={null}/>}
                    htmlType={'submit'}
            >
                Add post
            </Button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'profileAddPost',
    // @ts-ignore
})(AddPostForm)

type addPostPropsType = {
    cbAddPost: (post: string) => void
}

export const AddPost: React.FC<addPostPropsType> = (props) => {
    const addPost = (formData: any) => {
        props.cbAddPost(formData.post)
    }

    return <AddPostReduxForm onSubmit={addPost} />
}
