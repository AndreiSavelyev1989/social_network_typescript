import React from "react";
import styles from "./UniversalCheckbox.module.scss"

type PropsType = {
    title: string
    inputValue?: boolean
    formikFieldProps?: any
}

export const UniversalCheckbox: React.FC<PropsType>= ({title, inputValue, formikFieldProps}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <input type="checkbox" id="checkbox" name="checkbox" checked={inputValue} {...formikFieldProps}/>
                <label htmlFor="checkbox">
                    <div><i className="fas fa-check"> </i></div>
                    {title}</label>
            </div>
        </div>
    )
}