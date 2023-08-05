import React from 'react';
import cl from './addpost.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "utils/validate";
import {CustomInput} from "components/common/CustomInput";

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
//validate
const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props: {handleSubmit: any}) => {
    return (
        <form
            onSubmit={() => {
                props.handleSubmit()
                // props.resetForm()
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
})(AddPostForm)