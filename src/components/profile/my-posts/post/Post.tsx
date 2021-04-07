import React from "react";
import styles from "./Post.module.scss"
import avatar from "./../../../../images/userAvatar.png"
import {Fab, IconButton} from "@material-ui/core";
import likes from "./../../../../images/likes.png"
import DeleteIcon from "@material-ui/icons/Delete";
import {ProfileType} from "../../../../redux-state/profile-reducer";

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    setLikesCount: (id: string, likes: number) => void
    deletePost: (id: string) => void
    profile: ProfileType | null
}

export const Post: React.FC<PostPropsType> = ({likesCount, setLikesCount, postMessage, id, deletePost, profile}) => {

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
        <div className={styles.postContainer}>
            <div className={styles.titleBlock}>
                <img
                    className={styles.avatar}
                    src={profile ? profile.photos.large : ""}
                    alt="avatar"/>
                <div className={styles.likesBlock}>
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

            <div className={styles.imageBlock}>
                image
            </div>

            <div className={styles.messageBlock}>
                <div className={styles.message}>

                    {postMessage}

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