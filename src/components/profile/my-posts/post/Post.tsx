import React from "react";
import styles from "./Post.module.css"
import avatar from "./../../../../images/userAvatar.png"
import {Fab, IconButton} from "@material-ui/core";
import likes from "./../../../../images/likes.png"
import DeleteIcon from "@material-ui/icons/Delete";

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    setLikesCount: (id: string, likes: number) => void
    deletePost: (id: string) => void
}

export const Post: React.FC<PostPropsType> = ({likesCount, setLikesCount, postMessage, id, deletePost}) => {

    const onLikesClick = () => {
        let likes = likesCount + 1
        setLikesCount(id, likes)
    }

    const onDeleteHandler = () => {
        deletePost(id)
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
                    </Fab> {likesCount}
                </div>
            </div>

            <div className={styles.messageWrapper}>
                <div className={styles.message}>
                    <div>
                        {postMessage}
                    </div>
                    <IconButton aria-label="delete" onClick={onDeleteHandler}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>

        </div>
    )
};