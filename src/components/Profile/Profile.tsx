import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (status: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profile={props.profile} status={props.status} changeUserStatus={props.changeUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}