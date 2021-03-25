import React from "react";
import friendAvatar from "../../../images/friendAvatar.png"
import styles from "./Friend.module.css"
import {PhotosType} from "../../../redux-state/users-reducer";

type FriendPropsType = {
    id?: number
    photos: PhotosType
    followed?: boolean
    fullName: string
    status?: string
}

export function Friend(props: FriendPropsType) {
    return (
        <div className={styles.friendWrapper}>
            <div>
                <img src={props.photos.small ? props.photos.small : friendAvatar} alt="friend-avatar"/>
            </div>
            <div className={styles.friendName}>
                {props.fullName}
            </div>
        </div>
    )
}