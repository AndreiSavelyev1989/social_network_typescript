import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux-state/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {
    const postElements = props.posts.map(p => <Post key={p.id} postMessage={p.postMessage} likesCount={p.likesCount}/>)

    const addNewPost = () => {
        props.dispatch({type: "ADD_POST", newPostText: props.newPostText})
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: e.currentTarget.value})
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <textarea onChange={onChangePostText} value={props.newPostText}/>
            <button onClick={addNewPost}>Add post</button>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}