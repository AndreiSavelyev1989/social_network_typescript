import React from "react";
import styles from "./UniversalCheckbox.module.scss"

type PropsType = {
    title: string
}

export const UniversalCheckbox: React.FC<PropsType>= ({title}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <input type="checkbox" id="pizza" name="checkbox"/>
                <label htmlFor="pizza">
                    <div><i className="fas fa-check"> </i></div>
                    {title}</label>
            </div>
        </div>
    )
}