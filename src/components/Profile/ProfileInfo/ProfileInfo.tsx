import React from "react";
import styles from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src="https://natworld.info/wp-content/uploads/2017/12/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B7%D0%B8%D0%BC%D0%B0-%D0%B8-%D0%BB%D0%B5%D1%82%D0%BE.jpg"
                    alt="profile_image"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}
