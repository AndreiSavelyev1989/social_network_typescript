import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux-state/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {
    const postElements = props.posts.map(p => <Post key={p.id} postMessage={p.postMessage} likesCount={p.likesCount}/>)

    const onAddNewPost = () => {
        props.addPost(props.newPostText)
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <textarea onChange={onChangePostText} value={props.newPostText}/>
            <button onClick={onAddNewPost}>Add post</button>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}