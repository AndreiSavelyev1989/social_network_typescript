import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux-state/dialogs-reducer";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";

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

    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={styles.dialogs}>
            <div>{dialogsElements}</div>
            <div>
                {messagesElements}
                <TextField
                    variant={"outlined"}
                    label={"Add new post!"}
                    onChange={onChangeNewMessageText}
                    value={props.newMessageText}
                />
                <div>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        size={"small"}
                        onClick={onAddNewMessage}>Send message</Button>
                </div>

            </div>
        </div>
    )
}