import React from 'react';
import cl from './addpost.module.css'
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "utils/validate";
import {CustomInput} from "components/common/CustomInput";
import {Dispatch} from "redux";

//validate
const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props: {handleSubmit: any, dispatch: Dispatch}) => {
    return (
        <form
            onSubmit={() => {
                props.handleSubmit()
                props.dispatch(reset('profileAddPost'))
            }
        }
            className={cl.wrapper}
        >
            <Field
                validate={[required, maxLength50]}
                name={'post'}
                className={cl.textarea}
                component={CustomInput}
                tag={'textarea'}
            />
            <button className={cl.btnSend}>
                Add post
            </button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: 'profileAddPost'
// @ts-ignore
})(AddPostForm)


type addPostPropsType = {
    cbAddPost: (post: string) => void
}

export const AddPost: React.FC<addPostPropsType> = (props) => {

    const addPost = (formData: any) => {
        props.cbAddPost(formData.post)
    }

    return (
        <AddPostReduxForm onSubmit={addPost}/>
    );
};