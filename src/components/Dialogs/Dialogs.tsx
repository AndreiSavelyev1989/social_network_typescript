import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {
    ActionsTypes,
    DialogsType,
    MessagesType,
} from "../../redux-state/state";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {addNewMessagetAC, updateNewMessageTextAC} from "../../redux-state/dialogs-reducer";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch: (action: ActionsTypes) => void
    newMessageText: string
}

export function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)

    const addNewMessage = () => {
        props.dispatch(addNewMessagetAC(props.newMessageText))
    }

    const onChangeNewMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={styles.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <textarea value={props.newMessageText} onChange={onChangeNewMessageText}/>
                <button onClick={addNewMessage}>Send message</button>
            </div>
        </div>
    )
}