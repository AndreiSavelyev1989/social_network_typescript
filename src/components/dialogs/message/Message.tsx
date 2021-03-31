import React from "react";
import styles from "./Message.module.css"
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


type MessagePropsType = {
    message: string
    messageId: string
    deleteMessage: (messageId: string) => void
}

export const Message: React.FC<MessagePropsType> = ({message, messageId, deleteMessage}) => {

    const onDeleteHandler = () => {
        deleteMessage(messageId)
    }
    return (
        <div className={styles.messageContainer}>
            <div className={styles.messageItem}>
                {message}
            </div>
            <div>
                <IconButton aria-label="delete" onClick={onDeleteHandler}>
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </div>
        </div>
    )
};
