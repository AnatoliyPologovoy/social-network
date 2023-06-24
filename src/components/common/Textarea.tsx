import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface MyTextAreaProps extends WrappedFieldProps {
    // здесь вы можете определить дополнительные свойства, необходимые вашему компоненту.
    className: string
}

export const Textarea: React.FC<MyTextAreaProps>
    = ({ input, meta, ...rest }) => {

    const hasError = meta.touched && meta.error
    const styleColorError = {color: 'red'}
    const styleTextareaError = hasError ? {borderColor: 'red'} : {}

    return (
        <>
            <textarea {...input} {...rest}
                      className={rest.className}
                      style={styleTextareaError}
            />
            {hasError && <span style={styleColorError}>{meta.error}</span>}
        </>
    );
};
