import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux-state/dialogs-reducer";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import { Redirect } from "react-router-dom";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addNewMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
    isAuth: boolean
}

export function Dialogs(props: DialogsPropsType) {

    if(!props.isAuth) return <Redirect to="/login"/>

    const dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

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