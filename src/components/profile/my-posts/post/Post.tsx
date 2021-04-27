import React from "react";
import styles from "./Post.module.scss"
import avatar from "./../../../../images/userAvatar.png"
import {ProfileType} from "../../../../redux-state/profile-reducer";
import postBackground from "../../../../images/postBackground.jpg";
import {BiDislike, BiLike, MdDelete} from "react-icons/all";
import {DeleteButton} from "../../../common/delete-button/DeleteButton";

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    dislikesCount: number
    setLikesCount: (id: string, like: number) => void
    setDislikesCount: (id: string, dislike: number) => void
    deletePost: (id: string) => void
    profile: ProfileType | null
}

export const Post: React.FC<PostPropsType> = ({likesCount, setLikesCount, postMessage, id, deletePost, profile, dislikesCount, setDislikesCount}) => {

    const onLikeClick = () => {
        let like = likesCount + 1
        setLikesCount(id, like)
    }
    const onDislikeClick = () => {
        let dislike = dislikesCount + 1
        setDislikesCount(id, dislike)
    }

    const onPostDeleteHandler = () => {
        deletePost(id)
    }

    const today = new Date()
    const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`

    return (
        <div className={styles.postContainer}>
            <div className={styles.titleBlock}>
                <div className={styles.avatarBlock}>
                    <img
                        className={styles.avatar}
                        src={profile ? profile.photos.large : avatar}
                        alt="user-avatar"/>
                </div>

                <div className={styles.userNameDateBlock}>
                    <div className={styles.userName}>{profile?.fullName}</div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.postMessage}>{postMessage}</div>
                <DeleteButton onDeleteHandler={onPostDeleteHandler}/>
                {/*<div className={styles.deleteBlock} onClick={onPostDeleteHandler}>*/}
                {/*    <div className={styles.deleteButton}>*/}
                {/*        <MdDelete/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div className={styles.imageBlock} style={{backgroundImage: `url(${postBackground})`}}>

            </div>

            <div className={styles.likesBlock}>

                <div className={styles.likeDislikeContainer}>
                    <div>
                        <BiLike className={styles.like} onClick={onLikeClick}/>{likesCount}
                    </div>
                    <div>
                        <BiDislike className={styles.dislike} onClick={onDislikeClick}/>{dislikesCount}
                    </div>
                </div>
            </div>
        </div>
    )
};