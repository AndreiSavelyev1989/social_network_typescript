import React from "react";
import styles from "./Message.module.css"


type MessagePropsType = {
    id?: string
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={styles.messageItem}>
            {props.message}
        </div>
    )
}
