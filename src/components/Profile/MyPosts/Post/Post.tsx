import React from "react";
import styles from "./Post.module.css"
import avatar from "./../../../../images/userAvatar.png"
import {Fab} from "@material-ui/core";
import likes from "./../../../../images/likes.png"

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    setLikesCount: (id: string) => void
}

export function Post(props: PostPropsType) {

   const onLikesClick = () => {
        props.setLikesCount(props.id)
    }

    return (
        <div className={styles.item}>
            <img
                className={styles.avatar}
                src={avatar}
                alt="avatar"/>{props.postMessage}
            <div>
                <Fab
                    aria-label="like"
                    size={"small"}
                    variant={"extended"}>
                    <img
                        className={styles.likes}
                        onClick={onLikesClick}
                        src={likes}
                        alt="heart"/>
                </Fab> {props.likesCount}
            </div>
        </div>
    )
}