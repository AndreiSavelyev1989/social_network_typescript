import React from "react";
import styles from "./MyPosts.module.scss"
import {Post} from "./post/Post";
import {PostsType, ProfileType} from "../../../redux-state/profile-reducer";
import {ProfilePostForm} from "../profile-post-form/ProfilePostForm";
import {v1} from "uuid";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    setLikesCount: (id: string, likes: number) => void
    deletePost: (id: string) => void
    profile: ProfileType | null
}

export const MyPosts: React.FC<PropsType> = React.memo(({posts, profile, setLikesCount, addPost, deletePost}) => {

    const postElements =
        [...posts]
            .reverse()
            .map(p => <Post
                id={p.id}
                key={v1()}
                profile={profile}
                deletePost={deletePost}
                postMessage={p.postMessage}
                likesCount={p.likesCount}
                setLikesCount={setLikesCount}
            />)

    return (
        <div className={styles.postsContainer}>
            <ProfilePostForm addPost={addPost} profile={profile}/>
            {postElements}
        </div>
    )
})