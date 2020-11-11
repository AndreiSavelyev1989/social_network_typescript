import React from "react";
import styles from "./ProfileInfo.module.css"
import samurai from "../../../images/profileImg.png"

export function ProfileInfo() {
    return (
        <div className={styles.content}>
            <div>
               <h2>Profile:</h2>
                <img src={samurai} alt="samurai"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
