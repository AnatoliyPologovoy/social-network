import React, {ChangeEvent, useLayoutEffect, useRef, useState} from 'react';
import cl from "../dialogs.module.css";

const SendMessage = () => {

    const textarea = useRef<HTMLTextAreaElement | null>(null)
    const [textareaHeight, setTextareaHeight] = useState<number>(50)
    const [text, setText] = useState<string>('')
    //setting height textarea
    useLayoutEffect(()=> {
        if (textarea.current) {
            setTextareaHeight(textarea.current?.scrollHeight)
        }
    },[text])

    const textareaStyle = {height: textareaHeight}

    //onChange textarea
    const onChangeTextareaObserver = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <div>
            <textarea ref={textarea}
                      onChange={onChangeTextareaObserver}
                      value={text}
                      className={cl.textarea}
                      style={textareaStyle}>
            </textarea>
            <button className={cl.sendButton}>send</button>
        </div>
    );
};

export default SendMessage;