import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux-state/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export function MyPosts(props: MyPostsPropsType) {
    const postElements = props.posts.map(p => <Post key={p.id} postMessage={p.postMessage} likesCount={p.likesCount}/>)
    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <textarea/>
            <button>Add post</button>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}