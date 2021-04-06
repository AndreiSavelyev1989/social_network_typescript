import React from "react";
import styles from "./MyPosts.module.scss"
import {Post} from "./post/Post";
import {PostsType} from "../../../redux-state/profile-reducer";
import {ProfilePostForm} from "../profile-post-form/ProfilePostForm";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    setLikesCount: (id: string, likes: number) => void
    deletePost: (id: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = React.memo(({posts, setLikesCount, addPost, deletePost} ) => {

    const postElements =
        [...posts]
            .reverse()
            .map(p => <Post
        id={p.id}
        key={p.id}
        deletePost={deletePost}
        postMessage={p.postMessage}
        likesCount={p.likesCount}
        setLikesCount={setLikesCount}
    />)

    return (
        <div className={styles.postsContainer}>
         <ProfilePostForm addPost={addPost}/>
            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
})