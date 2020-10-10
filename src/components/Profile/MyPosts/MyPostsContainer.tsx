import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../redux-state/profile-reducer";
import {ActionsTypes, PostsType, RootStoreType} from "../../../redux-state/redux-store-types";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: RootStoreType
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const stateProfilePage = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostAC(stateProfilePage.newPostText))
    }

    const updateNewPostText = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts posts={stateProfilePage.posts}
                 newPostText={stateProfilePage.newPostText}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
        />
    )
}