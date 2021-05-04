import React from "react";
import styles from "./UniversalInput.module.scss";

type PropsType = {
    id?: string
    type: string
    placeholder: string
    formikFieldProps: any
    className?: "login"
}

export const UniversalInput: React.FC<PropsType> = ({id, type, placeholder, formikFieldProps, className}) => {
    return (
            <input
                id={id}
                className={className === "login" ? styles.loginInput : styles.formInput}
                type={type}
                placeholder={placeholder}
                required
                {...formikFieldProps}
            />
    )
}