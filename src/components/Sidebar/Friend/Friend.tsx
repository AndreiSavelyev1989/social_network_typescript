import React from "react";
import friendAvatar from "../../../images/friendAvatar.png"
import styles from "./Friend.module.css"
import {UserLocationType} from "../../../redux-state/users-reducer";

type FriendPropsType = {
    id?: string
    userPhotoUrl: string
    followed?: boolean
    fullName: string
    status?: string
    location?: UserLocationType
}

export function Friend(props: FriendPropsType) {
    return (
        <div className={styles.friendWrapper}>
            <div>
                <img src={props.userPhotoUrl ? props.userPhotoUrl : friendAvatar} alt="friend-avatar"/>
            </div>
            <div className={styles.friendName}>
                {props.fullName}
            </div>
        </div>
    )
}