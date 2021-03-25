import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./post/Post";
import {PostsType} from "../../../redux-state/profile-reducer";
import {ProfilePostForm} from "../profile-post-form/ProfilePostForm";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    setLikesCount: (id: string, likes: number) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post
        id={p.id}
        key={p.id}
        postMessage={p.postMessage}
        likesCount={p.likesCount}
        setLikesCount={props.setLikesCount}
    />)

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <ProfilePostForm addPost={props.addPost}/>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}