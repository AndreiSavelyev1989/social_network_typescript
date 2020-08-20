import React from "react";
import styles from "./Header.module.css"
import mainLogo from "../../images/main_logo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="logo"/>
        </header>
    )
}