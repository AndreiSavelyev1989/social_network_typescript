import styles from "./DeleteButton.module.scss";
import {MdDelete} from "react-icons/all";
import React from "react";

type PropsType = {
    onDeleteHandler: () => void
}

export const DeleteButton: React.FC<PropsType> = ({onDeleteHandler}) => {
    return (
        <div className={styles.deleteBlock} onClick={onDeleteHandler}>
            <div className={styles.deleteButton}>
                <MdDelete/>
            </div>
        </div>
    )
}