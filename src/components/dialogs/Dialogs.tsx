import React from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./dialog/Dialog";
import {Message} from "./message/Message";
import {DialogsType, MessagesType} from "../../redux-state/dialogs-reducer";
import {DialogsMessageForm} from "./dialogs-message-form/DialogsMessageForm";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addNewMessage: (newMessageText: string) => void
    deleteMessage: (messageId: string) => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo(({dialogs, messages, deleteMessage, addNewMessage}) => {

    const dialogsElements = dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message
        key={m.id}
        deleteMessage={deleteMessage}
        message={m.message}
        messageId={m.id}/>)

    return (
        <div className={styles.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <DialogsMessageForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    )
});