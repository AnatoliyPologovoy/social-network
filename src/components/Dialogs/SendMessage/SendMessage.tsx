import React, {ChangeEvent, useLayoutEffect, useRef, useState} from 'react';
import cl from "../dialogs.module.css";

type SendMessagePropsType = {
    cbSendMessage: () => void
    inputValue: string
    changeInputMessageText: (message: string) => void
}

const SendMessage:React.FC<SendMessagePropsType> = (props) => {

    const textarea = useRef<HTMLTextAreaElement | null>(null)
    const [textareaHeight, setTextareaHeight] = useState<number>(50)

    //setting height textarea
    useLayoutEffect(()=> {
        if (textarea.current) {
            const textareaScrollHeight = textarea.current?.scrollHeight
            setTextareaHeight(textareaScrollHeight > 50 ? textareaScrollHeight : 50)
        }
    },[props.inputValue])

    const textareaStyle = {height: textareaHeight}

    //onChange textarea
    const onChangeTextareaObserver = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeInputMessageText(e.currentTarget.value)
    }
    //onClick button
    const onClickButtonHandler = () => {
        props.cbSendMessage()
        setTextareaHeight(50)
    }

    return (
        <div className={cl.sendArea}>
            <textarea ref={textarea}
                      onChange={onChangeTextareaObserver}
                      value={props.inputValue}
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