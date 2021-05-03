import React from "react";
import styles from "./UniversalButton.module.scss";

type PropsType = {
    type?: "button" | "submit" | "reset" | undefined
    title: string
    callback?: () => void
    disabled?: boolean
    className?: boolean
}

export const UniversalButton: React.FC<PropsType> = ({type, title, callback, disabled, className}) => {
    return (
        <button  type={type}
                 onClick={callback}
                 disabled={disabled}
                 className={className ? styles.anotherButtonView : styles.slidingButton}>
            {title}
        </button>
    )
}