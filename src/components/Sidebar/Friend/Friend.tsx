import React from "react";
import friendAvatar from "../../../images/friendAvatar.png"
import styles from "./Friend.module.css"

type FriendPropsType = {
    id?: string
    name: string
}

export function Friend(props: FriendPropsType) {
    return (
        <div className={styles.friendWrapper}>
            <div>
                <img src={friendAvatar} alt="friend-avatar"/>
            </div>
            <div className={styles.friendName}>
                {props.name}
            </div>
        </div>
    )
}