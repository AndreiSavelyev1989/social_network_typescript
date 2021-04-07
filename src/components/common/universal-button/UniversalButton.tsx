import React from "react";
import styles from "./UniversalButton.module.scss";

type PropsType = {
    type?: "button" | "submit" | "reset" | undefined
    title: string
    callback?: () => void
}

export const UniversalButton: React.FC<PropsType> = ({type, title, callback}) => {
    return (
        <button  type={type}
                 onClick={callback}
                 className={styles.slidingButton}>
            {title}
        </button>
    )
}