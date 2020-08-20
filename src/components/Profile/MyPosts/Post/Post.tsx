import React from "react";
import styles from "./Post.module.css"
import avatar from "./../../../../images/user_post_avatar.png"

type PostType = {
    message: string
    likesCount: number
}

export function Post(props:PostType) {
    return (
        <div className={styles.item}>
            <img src={avatar} alt="avatar"/>{props.message}
            <div><span>likes </span>{props.likesCount}</div>
        </div>

    )
}