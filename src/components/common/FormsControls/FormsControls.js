import React from "react";
import css from './FormsControls.module.css';


const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    );
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    );
}