import React from "react";
import styles from "./Dialogs.module.css"
import {DialogsType, MessagesType} from "../../redux-state/state";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)
    return (
        <div className={styles.dialogs}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
        </div>
    )
}