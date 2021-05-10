import React from "react";
import userAvatar from "../../../images/userAvatar.jpg"
import styles from "./User.module.scss"
import {PhotosType} from "../../../redux-state/users-reducer";
import {NavLink} from "react-router-dom";
import {UniversalButton} from "../../common/universal-button/UniversalButton";

type UserPropsType = {
    userId: number
    userPhoto: PhotosType
    fullName: string
    followed: boolean
    status: string | null
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    userBackground: string
}

export const User: React.FC<UserPropsType> = React.memo(({userId, userBackground, fullName, status, unfollow, follow, followingInProgress, followed, userPhoto}) => {

    const onFollowClick = () => follow(userId)
    const onUnfollowClick = () => unfollow(userId)

    return (
        <div className={styles.userWrapper}>
            <div className={styles.userBlock_1}>
                <div className={styles.userBackgroud} style={{backgroundImage: `url(${userBackground})`}}></div>
                <div className={styles.userContent}>
                    <div className={styles.userFollowingButton}>
                        {followed
                            ? <UniversalButton
                                title={"unfollow"}
                                className={true}
                                disabled={followingInProgress.some(id => id === userId)}
                                callback={onUnfollowClick}/>
                            : <UniversalButton
                                title={"follow"}
                                disabled={followingInProgress.some(id => id === userId)}
                                callback={onFollowClick}/>
                        }
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userFullName}>{fullName}</div>
                        <div className={styles.status}>
                            {status ? status : "I haven't a" +
                                " status!!!"}</div>
                    </div>
                </div>
            </div>
            <NavLink to={"/profile/" + userId}>
                <div className={styles.userBlock_2} style={{
                    backgroundImage: userPhoto.large
                        ? `url(${userPhoto.large})`
                        : `url(${userAvatar})`
                }}>
                </div>
            </NavLink>
        </div>
    )
});