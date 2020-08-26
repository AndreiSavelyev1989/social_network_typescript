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

export function Dialogs(props:DialogsType) {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {props.dialogs.map(d => <div>
                    <NavLink to={"/dialogs"}>{d.name}</NavLink>
                </div>)}
            </div>
            <div className={styles.messageItem}>
                {props.dialogs.map(d => <div>{d.message}</div>)}
            </div>
        </div>
    )
}