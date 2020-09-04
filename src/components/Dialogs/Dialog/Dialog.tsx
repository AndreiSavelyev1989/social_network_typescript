import React from "react";
import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: string
    name: string
}

export function Dialog(props: DialogPropsType) {
    return (
        <div className={styles.dialogItem}>
            <div>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}
