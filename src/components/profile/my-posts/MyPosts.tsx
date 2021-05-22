import React from "react";
import styles from "./MyPosts.module.scss"
import {Post} from "./post/Post";
import {PostType, ProfileType} from "../../../redux-state/profile-reducer";
import {ProfilePostForm} from "../profile-post-form/ProfilePostForm";
import {v1} from "uuid";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
    setLikesCount: (id: string, like: number) => void
    setDislikesCount: (id: string, dislike: number) => void
    deletePost: (id: string) => void
    profile: ProfileType | null
    authUserId: number | null
}

export const MyPosts: React.FC<PropsType> = React.memo(({posts, profile, setLikesCount, addPost, deletePost, setDislikesCount, authUserId}) => {

    const postElements =
        [...posts]
            .reverse()
            .map(p => <Post
                id={p.id}
                key={v1()}
                postBackground={p.postBackground}
                profile={profile}
                deletePost={deletePost}
                postMessage={p.postMessage}
                likesCount={p.likesCount}
                dislikesCount={p.dislikesCount}
                setLikesCount={setLikesCount}
                setDislikesCount={setDislikesCount}
                authUserId={authUserId}
            />)

    return (
        <div className={styles.postsContainer}>
            <ProfilePostForm addPost={addPost} profile={profile} id={authUserId}/>
            {postElements}
        </div>
    )
})