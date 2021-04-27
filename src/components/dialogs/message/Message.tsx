import React from "react";
import styles from "./Message.module.scss"
import userAvatar from "./../../../images/userAvatar.png"
import {DeleteButton} from "../../common/delete-button/DeleteButton";

type MessagePropsType = {
    message: string
    messageId: string
    deleteMessage: (messageId: string) => void
}

export const Message: React.FC<MessagePropsType> = ({message, messageId, deleteMessage}) => {

    const onMessageDeleteHandler = () => {
        deleteMessage(messageId)
    }
    return (
        <div className={styles.messageContainer}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt="userAvatar"/>
            </div>
            <div className={styles.messageItem}>
                <div>
                    {message}
                </div>
                <DeleteButton onDeleteHandler={onMessageDeleteHandler}/>
            </div>
        </div>
    )
};
