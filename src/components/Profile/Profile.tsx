import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux-state/redux-store-types";

type ProfilePropsType = {
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}