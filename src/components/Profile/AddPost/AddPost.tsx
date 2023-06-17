import React from 'react';
import cl from './addpost.module.css'
import {Field, reduxForm} from "redux-form";

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

const AddPostForm = (props: {handleSubmit: any}) => {
    return (
        <form
            onSubmit={props.handleSubmit}
            className={cl.wrapper}
        >
            <Field
                name={'post'}
                className={cl.textarea}
                component={'textarea'}
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