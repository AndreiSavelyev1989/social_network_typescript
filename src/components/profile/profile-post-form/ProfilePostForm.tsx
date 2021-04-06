import style from "../../login/Login.module.css";
import styles from "./ProfilePostForm.module.scss";
import React from "react";
import {useFormik} from "formik";

type FormikErrorType = {
    newPost?: string
}

type PropsType = {
    addPost: (newPost: string) => void
}

export const ProfilePostForm: React.FC<PropsType> = ({addPost}) => {
    const formik = useFormik({
        initialValues: {
            newPost: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.newPost && values.newPost.length > 100) {
                errors.newPost = 'Max length is 100 symbols';
            }
            return errors;
        },

        onSubmit: values => {
            addPost(values.newPost)
            formik.resetForm({
                values: {newPost: '',}
            })
        },
    })
    return (
        <div className={styles.postsContainer}>
            <div className={styles.postsTitle}>
                Create Post
            </div>
            <form className={styles.formBlock} onSubmit={formik.handleSubmit}>
                <input
                    className={styles.formInput}
                    type={"text"}
                    placeholder={"Write something here..."}
                    required
                    {...formik.getFieldProps("newPost")}/>
                {formik.touched.newPost && formik.errors.newPost ?
                    <div className={style.registrationError}>{formik.errors.newPost}</div> : null}
                <button
                    color={"primary"}
                    type={"submit"}>Add post
                </button>
            </form>
        </div>
    )
}