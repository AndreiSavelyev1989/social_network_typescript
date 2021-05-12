import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./UniversalInput.module.scss";

type PropsType = {
    id?: string
    type: string
    placeholder?: string
    formikFieldProps?: any
    className?: "login" | "status"
    value?: undefined | string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    onBlur?: () => void
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const UniversalInput: React.FC<PropsType> = ({
                                                        id,
                                                        type,
                                                        placeholder,
                                                        formikFieldProps,
                                                        className,
                                                        value,
                                                        onChange,
                                                        autoFocus,
                                                        onBlur,
                                                        onKeyUp
                                                    }) => {
    return (
            <input
                id={id}
                className={className === "login" ? styles.loginInput : styles.formInput
                    ? className === "status" ? styles.statusInput : styles.formInput : styles.formInput}
                type={type}
                placeholder={placeholder}
                required
                autoFocus={autoFocus}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                value={value}
                {...formikFieldProps}
            />
    )
}