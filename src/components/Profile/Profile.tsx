import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

export function Profile(props: ProfilePropsType) {
    if(!props.isAuth) return <Redirect to="/login"/>
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}