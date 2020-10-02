import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux-state/state";

type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (newPostMessage: string) => void
    onPostChange: (newPostText: string) => void
    newPostText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                addPost={props.addPost}
                onPostChange={props.onPostChange}
            />
        </div>
    )
}