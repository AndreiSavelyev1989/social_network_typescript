import styles from "./ProfilePostForm.module.scss";
import React from "react";
import {useFormik} from "formik";
import {UniversalButton} from "../../common/universal-button/UniversalButton";
import {UniversalInput} from "../../common/universal-input/UniversalInput";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import userAvatar from "../../../images/userAvatar.jpg"

type FormikErrorType = {
    newPost?: string
}

type PropsType = {
    addPost: (newPost: string) => void
    profile: ProfileType | null
    id: number | null
}

export const ProfilePostForm: React.FC<PropsType> = ({addPost, profile, id}) => {
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

    return <>
        {profile && id === profile?.userId
            ? <div className={styles.postsContainer}>
                <div className={styles.postsTitle}>
                    Create Post
                </div>
                <form className={styles.formBlock} onSubmit={formik.handleSubmit}>
                    <div className={styles.formBlockEnterText}>
                        {profile ? <div className={styles.userPhoto}>
                            <img src={profile.photos.large ? profile.photos.large : userAvatar} alt="user-avatar"/>
                        </div> : <Preloader/>}
                        <UniversalInput type={"text"}
                                        placeholder={"Write something here..."}
                                        formikFieldProps={formik.getFieldProps("newPost")}/>
                    </div>

                    <div className={styles.formBlockSubmit}>
                        {formik.touched.newPost && formik.errors.newPost ?
                            <div className={styles.error}>{formik.errors.newPost}</div>
                            : <div></div>}
                        <UniversalButton type={"submit"} title={"post"}/>
                    </div>
                </form>
            </div>
            : <div></div>
        }
    </>
}