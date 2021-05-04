import style from "./../../login/login-form/LoginForm.module.scss";
import styles from "./ProfilePostForm.module.scss";
import React from "react";
import {useFormik} from "formik";
import {UniversalButton} from "../../common/universal-button/UniversalButton";
import {UniversalInput} from "../../common/universal-input/UniversalInput";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";

type FormikErrorType = {
    newPost?: string
}

type PropsType = {
    addPost: (newPost: string) => void
    profile: ProfileType | null
}

export const ProfilePostForm: React.FC<PropsType> = ({addPost, profile}) => {
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
                <div className={styles.formBlockEnterText}>
                    {profile ? <div className={styles.userPhoto}>
                        <img src={profile ? profile.photos.large : ""} alt="user-avatar"/>
                    </div> : <Preloader/>}
                    <UniversalInput type={"text"}
                                    placeholder={"Write something here..."}
                                    formikFieldProps={formik.getFieldProps("newPost")}/>
                </div>

                <div className={styles.formBlockSubmit}>
                    {formik.touched.newPost && formik.errors.newPost ?
                        <div className={style.registrationError}>{formik.errors.newPost}</div>
                        : <div> </div>}
                    <UniversalButton type={"submit"} title={"post"} />
                </div>

            </form>
        </div>
    )
}