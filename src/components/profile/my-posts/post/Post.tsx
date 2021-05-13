import React, {useState} from "react";
import styles from "./Post.module.scss"
import avatar from "./../../../../images/userAvatar.png"
import {ProfileType} from "../../../../redux-state/profile-reducer";
import {BiDislike, BiLike} from "react-icons/all";
import {DeleteButton} from "../../../common/delete-button/DeleteButton";
import {Preloader} from "../../../common/preloader/Preloader";
import {ConfirmModal} from "../../../common/modal/modal-confirm/ConfirmModal";

type PostPropsType = {
    id: string
    postMessage: string
    likesCount: number
    dislikesCount: number
    setLikesCount: (id: string, like: number) => void
    setDislikesCount: (id: string, dislike: number) => void
    deletePost: (id: string) => void
    profile: ProfileType | null
    postBackground: string
}

export const Post: React.FC<PostPropsType> = ({likesCount, setLikesCount, postMessage, id, deletePost, profile, dislikesCount, setDislikesCount, postBackground}) => {

    const [confirm, setConfirm] = useState(false)

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

    const onModalDeleteHandler = () => {
        setConfirm(true)
    }
    const cancelDelete = () => {
        setConfirm(false)
    }

    const today = new Date()
    const date = `${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`

    return (
        <div className={styles.postContainer}>
            <div className={styles.titleBlock}>
                <div className={styles.avatarBlock}>
                    {profile
                        ? <img
                            className={styles.avatar}
                            src={profile.photos.large}
                            alt="user-avatar"/>
                        : <Preloader/>}
                </div>

                <div className={styles.userNameDateBlock}>
                    <div className={styles.userName}>{profile?.fullName}</div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div className={styles.postMessage}>{postMessage}</div>
                <DeleteButton onDeleteHandler={onModalDeleteHandler}/>
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
            <ConfirmModal title={"Delete ?"}
                          cancelCallback={cancelDelete}
                          confirm={confirm}
                          confirmCallback={onPostDeleteHandler}/>
        </div>
    )
};