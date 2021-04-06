import React from "react";
import styles from "./MyFriends.module.scss";

export const MyFriends = React.memo(() => {
    return (
        <div className={styles.aboutMyFriendContainer}>
            My friends
        </div>
    )
})