import React from "react";
import {UserLocationType} from "../../../redux-state/users-reducer";
import userPhoto from "../../../images/friendAvatar.png"
import styles from "./User.module.css"

type UserPropsType = {
    id: string
    userPhotoUrl: string
    fullName: string
    followed: boolean
    status: string
    location: UserLocationType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export function User(props: UserPropsType) {

    const onFollowClick = () => props.follow(props.id)
    const onUnfollowClick = () => props.unfollow(props.id)

    return (
        <div className={styles.userWrapper}>
            <div className={styles.userBlock_1}>
                <img src={props.userPhotoUrl ? props.userPhotoUrl : userPhoto} alt="user-photo"/>
                <div>
                    {props.followed
                        ? <button onClick={onUnfollowClick}>unfollow</button>
                        : <button onClick={onFollowClick}>follow</button>
                    }
                </div>
            </div>
            <div className={styles.userBlock_2}>
                <div className={styles.userFullName}>{props.fullName}</div>
                <div>{props.status}</div>
            </div>
            <div className={styles.userBlock_3}>
                <div className={styles.countryName}>{props.location.countryName}</div>
                <div>{props.location.cityName}</div>
            </div>
        </div>
    )
}