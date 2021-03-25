import React from "react";
import styles from "./Post.module.css"
import avatar from "./../../../../images/userAvatar.png"
import {Fab} from "@material-ui/core";
import likes from "./../../../../images/likes.png"

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    setLikesCount: (id: string, likes: number) => void
}

export function Post(props: PostPropsType) {

    const onLikesClick = () => {
        let likes = props.likesCount + 1
        props.setLikesCount(props.id, likes)
    }

    const today = new Date()
    const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`

    return (
        <div className={styles.postItem}>
            <div>
                <img
                    className={styles.avatar}
                    src={avatar}
                    alt="avatar"/>
                <div className={styles.likesWrapper}>
                    <Fab
                        aria-label="like"
                        size={"small"}
                        color={"primary"}
                        variant={"extended"}>
                        <img
                            className={styles.likes}
                            onClick={onLikesClick}
                            src={likes}
                            alt="heart"/>
                    </Fab> {props.likesCount}
                </div>
            </div>

            <div className={styles.messageWrapper}>
                <div className={styles.message}>
                    {props.postMessage}
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>

        </div>
    )
}