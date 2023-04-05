import React, {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import cl from './addpost.module.css'

type addPostPropsType = {
    cbAddPost: () => void
    changeInputPost: (text: string) => void
    inputValue: string
}

const AddPost: React.FC<addPostPropsType> = (props) => {

    const textarea = useRef<HTMLTextAreaElement | null>(null)
    const [textareaHeight, setTextareaHeight] = useState<number>(50)

    //setting height textarea
    useEffect(() => {
        if (textarea.current) {
            const textareaScrollHeight = textarea.current?.scrollHeight
            setTextareaHeight(textareaScrollHeight > 50 ? textareaScrollHeight : 50)
        }
    }, [props.inputValue])

    const textareaStyle = {height: textareaHeight}

    //onChange textarea
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeInputPost(e.currentTarget.value)
    }
    //callBack to add post in state
    const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.cbAddPost()
        setTextareaHeight(50)
    }

    return (
        <div className={cl.wrapper}>
            <textarea ref={textarea}
                      className={cl.textarea}
                      onChange={onChangeTextareaHandler}
                      value={props.inputValue} // value from State
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