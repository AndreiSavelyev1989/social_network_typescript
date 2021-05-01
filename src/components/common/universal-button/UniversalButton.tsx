import React from "react";
import styles from "./UniversalButton.module.scss";

type PropsType = {
    type?: "button" | "submit" | "reset" | undefined
    title: string
    callback?: () => void
    disabled?: boolean
}

export const UniversalButton: React.FC<PropsType> = ({type, title, callback, disabled}) => {
    return (
        <button  type={type}
                 onClick={callback}
                 disabled={disabled}
                 className={styles.slidingButton}>
            {title}
        </button>
    )
}