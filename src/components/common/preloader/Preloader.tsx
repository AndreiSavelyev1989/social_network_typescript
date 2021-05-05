import React from "react";
import preloader from "../../../images/preloader.svg";
import styles from "./Preloader.module.scss"


export const Preloader = () => {
    return (
        <div className={styles.preloaderContainer}>
            <img
                src={preloader}
                alt="preloader"/>
        </div>
    )
}