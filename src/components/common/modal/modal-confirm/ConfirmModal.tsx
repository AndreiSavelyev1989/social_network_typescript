import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../../redux-state/redux-store";
import {AuthUserType, setError} from "../../../../redux-state/auth-reducer";
import styles from "./ConfirmModal.module.scss";
import {UniversalButton} from "../../universal-button/UniversalButton";

type PropsType = {
    confirm: boolean
    title: string
    confirmCallback: () => void
    cancelCallback: () => void
}
export const ConfirmModal: React.FC<PropsType> = ({
                                                      confirm,
                                                      title,
                                                      confirmCallback,
                                                      cancelCallback
                                                  }) => {

    return (
        <div className={confirm ? styles.modalContainer : styles.noModal}>
            <div className={styles.text}>{title}</div>
            <div className={styles.confirmBlock}>
                <UniversalButton callback={confirmCallback} title={"Ok"}/>
                <UniversalButton callback={cancelCallback} title={"Cancel"} className={true}/>
            </div>
        </div>
    )
}