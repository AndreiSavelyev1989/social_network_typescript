import React from "react";
import styles from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";
import userAvatar from "../../../images/userAvatar.png"

type DialogPropsType = {
    id: string
    name: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={styles.dialogItemContainer}>
            <div className={styles.avatarBlock}>
                <img src={userAvatar} alt="user-avatar"/>
            </div>
            <div className={styles.userNameBlock}>
                <NavLink to={`/dialogs/${props.id}`}
                         activeClassName={styles.active}
                         className={styles.dialogUserName}
                >{props.name}</NavLink>
            </div>
        </div>
    )
}
