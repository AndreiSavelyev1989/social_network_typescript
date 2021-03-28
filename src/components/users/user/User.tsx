import React from "react";
import userPhoto from "../../../images/friendAvatar.png"
import styles from "./User.module.css"
import {PhotosType} from "../../../redux-state/users-reducer";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";

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
                    <NavLink to={"/profile/" + props.id}>
                        <img src={props.userPhoto.large ? props.userPhoto.large : userPhoto} alt="user-avatar"/>
                    </NavLink>
                    <div className={styles.button}>
                        {props.followed
                            ? <Button
                                variant={"contained"}
                                color={"secondary"}
                                size={"small"}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                                onClick={onUnfollowClick}>unfollow</Button>
                            : <Button
                                variant={"contained"}
                                color={"primary"}
                                size={"small"}
                                disabled={props.followingInProgress.some(id => id === props.id)}
                                onClick={onFollowClick}>follow</Button>
                        }
                    </div>
                </div>
                <div className={styles.userBlock_2}>
                    <div className={styles.userFullName}><label>Name:</label> {props.fullName}</div>
                    <div className={styles.status}><label>Status:</label> {props.status ? props.status : "I haven't a" +
                        " status!!!"}</div>
                </div>
                <div className={styles.userBlock_2}>
                    <div><label>Country:</label> {"props.location.countryName"}</div>
                    <div className={styles.cityName}><label>City:</label> {"props.location.cityName"}</div>
                </div>
        </div>
    )
});