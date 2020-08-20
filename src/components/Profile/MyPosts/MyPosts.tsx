import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                <div>New post:</div>
                <Post message ={"Hello World"} likesCount ={20}/>
                <Post message ={"It is my first post"} likesCount ={10}/>
            </div>
        </div>
    )
}