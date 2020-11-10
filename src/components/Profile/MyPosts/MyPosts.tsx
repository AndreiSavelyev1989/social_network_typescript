import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux-state/profile-reducer";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
    setLikesCount: (id: string, likes: number) => void
}

export function MyPosts(props: MyPostsPropsType) {
    const postElements = props.posts.map(p => <Post
        id={p.id}
        key={p.id}
        postMessage={p.postMessage}
        likesCount={p.likesCount}
        setLikesCount={props.setLikesCount}
    />)

    const onAddNewPost = () => {
        props.addPost(props.newPostText)
    }

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>
            <TextField
                variant={"outlined"}
                label={"Add new post!"}
                onChange={onChangePostText}
                value={props.newPostText}
            />
            <Button
                variant={"contained"}
                color={"primary"}
                size={"small"}
                onClick={onAddNewPost}>Add post</Button>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}