import styles from "./DeleteButton.module.scss";
import {MdDelete} from "react-icons/all";
import React from "react";

type PropsType = {
    onDeleteHandler: () => void
    disabled?: boolean
}

export const DeleteButton: React.FC<PropsType> = ({onDeleteHandler, disabled}) => {
    return (
        <div className={styles.deleteBlock} >
            <div className={styles.deleteButton}>
                <button disabled={disabled} onClick={onDeleteHandler}>
                    <MdDelete className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}