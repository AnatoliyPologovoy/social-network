import React from 'react';
import {WrappedFieldProps} from 'redux-form';

interface MyTextAreaProps extends WrappedFieldProps {
    // здесь вы можете определить дополнительные свойства, необходимые вашему компоненту.
    className: string
    tag: 'textarea' | 'input'
}

export const CustomInput: React.FC<MyTextAreaProps>
    = ({input, meta, ...rest}) => {
    const hasError = meta.touched && meta.error
    const styleError = {color: 'red', margin: '5px'}
    const styleTextareaError = hasError ? {borderColor: 'red'} : {}

    let inputView
    if (rest.tag === 'textarea') {
        inputView =
            <textarea {...input} {...rest}
                      className={rest.className}
                      style={styleTextareaError}
            />
    } else {
        inputView =
            <input {...input} {...rest}
                      className={rest.className}
                      style={styleTextareaError}
            />
    }

    return (
        <>
            {inputView}
            {hasError && <p style={styleError}>{meta.error}</p>}
        </>
    );
};
