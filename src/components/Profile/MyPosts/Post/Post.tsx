import React from "react";
import styles from "./Post.module.css"
import avatar from "./../../../../images/user_post_avatar.png"

type PostPropsType = {
    id?: string
    postMessage: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={styles.item}>
            <img src={avatar} alt="avatar"/>{props.postMessage}
            <div><span>likes </span>{props.likesCount}</div>
        </div>
    )
}