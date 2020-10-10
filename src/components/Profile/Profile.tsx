import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType, RootStoreType} from "../../redux-state/redux-store-types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: RootStoreType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}