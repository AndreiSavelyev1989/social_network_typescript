import React from "react";
import userPhoto from "../../../images/userAvatar.jpg"
import userBackground from "../../../images/userBackground.jpg"
import styles from "./User.module.scss"
import {PhotosType} from "../../../redux-state/users-reducer";
import {NavLink} from "react-router-dom";
import {UniversalButton} from "../../common/universal-button/UniversalButton";

type UserPropsType = {
    id: number
    userPhoto: PhotosType
    fullName: string
    followed: boolean
    status: string | null
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User = React.memo((props: UserPropsType) => {

    const onFollowClick = () => props.follow(props.id)
    const onUnfollowClick = () => props.unfollow(props.id)

    return (
        <div className={styles.userWrapper}>
            <div className={styles.userBlock_1}>
                <div className={styles.userBackgroud} style={{backgroundImage: `url(${userBackground})`}}></div>
                <div className={styles.userContent}>
                    <div className={styles.userFollowingButton}>
                        {props.followed
                            ? <UniversalButton
                                title={"unfollow"}
                                className={true}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                                callback={onUnfollowClick}/>
                            : <UniversalButton
                                title={"follow"}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                                callback={onFollowClick}/>
                        }
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.userFullName}>{props.fullName}</div>
                        <div className={styles.status}>
                            {props.status ? props.status : "I haven't a" +
                                " status!!!"}</div>
                    </div>
                </div>
            </div>
            <NavLink to={"/profile/" + props.id}>
                <div className={styles.userBlock_2} style={{
                    backgroundImage: props.userPhoto.large
                        ? `url(${props.userPhoto.large})`
                        : `url(${userPhoto})`
                }}>
                </div>
            </NavLink>
        </div>
    )
});