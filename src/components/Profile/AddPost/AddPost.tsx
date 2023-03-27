import React, {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import cl from './addpost.module.css'

type addPostPropsType = {
    cbAddPost: (post: string) => void
}

const AddPost: React.FC<addPostPropsType> = (props) => {

    const textarea = useRef<HTMLTextAreaElement | null>(null)
    const [textareaHeight, setTextareaHeight] = useState<number>(50)
    const [text, setText] = useState<string>('')
    //setting height textarea
    useEffect(() => {
        if (textarea.current) {
            const textareaScrollHeight = textarea.current?.scrollHeight
            setTextareaHeight(textareaScrollHeight > 50 ? textareaScrollHeight : 50)
        }
    }, [text])

    const textareaStyle = {height: textareaHeight}

    //onChange textarea
    const onChangeTextareaObserver = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    //callBack to add post in state
    const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.cbAddPost(text)
        setText('')
    }

    return (
        <div className={cl.wrapper}>
            <textarea ref={textarea}
                      className={cl.textarea}
                      onChange={onChangeTextareaObserver}
                      value={text}
                      style={textareaStyle}>
            </textarea>
            <button className={cl.btnSend}
                    onClick={onClickButtonHandler}
            >Add post
            </button>
        </div>
    );
};

export default AddPost;