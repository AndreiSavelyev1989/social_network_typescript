import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux-state/dialogs-reducer";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addNewMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
}

export function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)

    const onAddNewMessage = () => {
        props.addNewMessage(props.newMessageText)
    }

    const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={styles.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <textarea value={props.newMessageText} onChange={onChangeNewMessageText}/>
                <button onClick={onAddNewMessage}>Send message</button>
            </div>
        </div>
    )
}