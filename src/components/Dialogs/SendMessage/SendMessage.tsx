import React, {ChangeEvent, useLayoutEffect, useRef, useState} from 'react';
import cl from "../dialogs.module.css";

type SendMessagePropsType = {
    cbSendMessage: (message: string) => void
}

const SendMessage:React.FC<SendMessagePropsType> = (props) => {

    const textarea = useRef<HTMLTextAreaElement | null>(null)
    const [textareaHeight, setTextareaHeight] = useState<number>(50)
    const [text, setText] = useState<string>('')
    //setting height textarea
    useLayoutEffect(()=> {
        if (textarea.current) {
            const textareaScrollHeight = textarea.current?.scrollHeight
            setTextareaHeight(textareaScrollHeight > 50 ? textareaScrollHeight : 50)
        }
    },[text])

    const textareaStyle = {height: textareaHeight}

    //onChange textarea
    const onChangeTextareaObserver = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }
    //onClick button
    const onClickButtonHandler = () => {
        props.cbSendMessage(text)
        setText('')
    }

    return (
        <div>
            <textarea ref={textarea}
                      onChange={onChangeTextareaObserver}
                      value={text}
                      className={cl.textarea}
                      style={textareaStyle}>
            </textarea>
            <button className={cl.sendButton}
                    onClick={onClickButtonHandler}
            >send
            </button>
        </div>
    );
};

export default SendMessage;