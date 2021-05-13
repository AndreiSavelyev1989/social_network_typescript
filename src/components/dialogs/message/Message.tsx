import React, {useState} from "react";
import styles from "./Message.module.scss"
import userAvatar from "./../../../images/userAvatar.jpg"
import {DeleteButton} from "../../common/delete-button/DeleteButton";
import {ConfirmModal} from "../../common/modal/modal-confirm/ConfirmModal";

type MessagePropsType = {
    message: string
    messageId: string
    deleteMessage: (messageId: string) => void
}

export const Message: React.FC<MessagePropsType> = ({message, messageId, deleteMessage}) => {

    const [confirm, setConfirm] = useState(false)

    const onMessageDeleteHandler = () => {
        deleteMessage(messageId)
    }

    const onConfirmDeleteHandler = () => {
        setConfirm(true)
    }
    const onCancelDeleteHandler = () => {
        setConfirm(false)
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
                <DeleteButton onDeleteHandler={onConfirmDeleteHandler}/>
            </div>
            <ConfirmModal confirm={confirm}
                          title={"Delete ?"}
                          confirmCallback={onMessageDeleteHandler}
                          cancelCallback={onCancelDeleteHandler}/>
        </div>
    )
};
