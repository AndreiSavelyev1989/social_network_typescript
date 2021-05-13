import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../../redux-state/redux-store";
import {AuthUserType, setError} from "../../../../redux-state/auth-reducer";
import styles from "./ErrorModal.module.scss";
import {UniversalButton} from "../../universal-button/UniversalButton";

export const ErrorModal = () => {

    const {error} = useSelector<StoreType, AuthUserType>(state => state.auth)
    const [modal, setModal] = useState(error)
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            setModal(error)
        }

    }, [error])


    const closeModalWindow = () => {
        setModal("")
        dispatch(setError(""))
    }

    return (
        <div className={modal ? styles.modalContainer : styles.noModal}>
            <div className={styles.text}>{error}</div>
            <UniversalButton callback={closeModalWindow} title={"Close"}/>
        </div>
    )
}