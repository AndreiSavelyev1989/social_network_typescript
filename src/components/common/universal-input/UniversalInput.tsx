import React from "react";
import styles from "./UniversalInput.module.scss";

type PropsType = {
    type: string
    placeholder: string
    formikFieldProps: any
}

export const UniversalInput: React.FC<PropsType> = ({type, placeholder, formikFieldProps}) => {
    return (
        <input
            className={styles.formInput}
            type={type}
            placeholder={placeholder}
            required
            {...formikFieldProps}
            />
    )
}