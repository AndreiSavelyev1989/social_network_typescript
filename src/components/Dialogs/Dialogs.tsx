import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    id: number
    name: string
    message: string
}
type DialogsType = {
    dialogs: Array<DialogsPropsType>
}

function Dialog(props: DialogsType) {
    return (
        <div className={styles.dialogItem}>
            {props.dialogs.map(d => <div>
                <NavLink to={`/dialogs/${d.id}`} activeClassName={styles.active}>{d.name}</NavLink>
            </div>)}
        </div>
    )
}

function Message(props: DialogsType) {
    return (
        <div className={styles.messageItem}>
            {props.dialogs.map(d => <div>{d.message}</div>)}
        </div>
    )
}

export function Dialogs(props: DialogsType) {
    return (
        <div className={styles.dialogs}>
            <Dialog dialogs={props.dialogs}/>
            <Message dialogs={props.dialogs}/>
        </div>
    )
}