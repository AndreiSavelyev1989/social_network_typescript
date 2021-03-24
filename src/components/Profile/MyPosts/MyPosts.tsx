import React from "react";
import styles from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux-state/profile-reducer";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useFormik} from "formik";
import style from "../../Login/Login.module.css";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
    setLikesCount: (id: string, likes: number) => void
}

type FormikErrorType = {
    newPost?: string
}

export function MyPosts(props: MyPostsPropsType) {

    const postElements = props.posts.map(p => <Post
        id={p.id}
        key={p.id}
        postMessage={p.postMessage}
        likesCount={p.likesCount}
        setLikesCount={props.setLikesCount}
    />)

    const formik = useFormik({
        initialValues: {
            newPost: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.newPost) {
                errors.newPost = 'Required';
            } else if (values.newPost.length > 100) {
                errors.newPost = 'Your post must be less then 100 symbols';
            }
            return errors;
        },

        onSubmit: values => {
            props.addPost(values.newPost)
        },
    })
    return (
        <div className={styles.postsWrapper}>
            <h3>My posts</h3>

            <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                <TextField
                    className={style.input}
                    type={"text"}
                    placeholder={"New post"}
                    variant={"outlined"}
                    label={"Add new post!"}
                    required
                    {...formik.getFieldProps("newPost")}/>
                {formik.touched.newPost && formik.errors.newPost ?
                    <div className={style.registrationError}>{formik.errors.newPost}</div> : null}
                <Button
                    variant={"contained"}
                    color={"primary"}
                    size={"small"}
                    type={"submit"}>Add post</Button>
            </form>

            <div>
                <div>New post:</div>
                {postElements}
            </div>
        </div>
    )
}