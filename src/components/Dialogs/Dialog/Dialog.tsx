import React from "react";
import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import userAvatar from "../../../images/userAvatar.png"

type DialogPropsType = {
    id: string
    name: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={styles.dialogItem}>
            <div className={styles.dialogData}>
                <img src={userAvatar} alt="user-avatar"/>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}
