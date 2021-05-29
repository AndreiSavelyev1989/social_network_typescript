import {useFormik} from "formik";
import {ProfileType} from "../../../../../redux-state/profile-reducer";
import styles from "../About.module.scss";
import {AboutItem} from "../about-item/AboutItem";
import {Contact} from "./contact/Contact";
import React from "react";
import {UniversalButton} from "../../../../common/universal-button/UniversalButton";
import {UniversalCheckbox} from "../../../../common/universal-checkbox/UniversalCheckbox";

type FormikErrorType = {
    fullName?: string
}

type PropsType = {
    profile: ProfileType
    setUserProfileEditMode: (editMode: boolean) => void
    changeUserProfile: (profile: ProfileType) => void
    editMode: boolean
    error: string
}

export const UserContactsForm: React.FC<PropsType> = ({
                                                          profile,
                                                          setUserProfileEditMode,
                                                          changeUserProfile,
                                                          editMode,
                                                          error
                                                      }) => {
    const formik = useFormik({
        initialValues: {
            userId: profile.userId,
            aboutMe: profile.aboutMe,
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            contacts: {
                facebook: profile.contacts.facebook,
                github: profile.contacts.github,
                instagram: profile.contacts.instagram,
                mainLink: profile.contacts.mainLink,
                twitter: profile.contacts.twitter,
                vk: profile.contacts.vk,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
            },
            photos: {
                small: "",
                large: ""
            }
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.fullName) {
                errors.fullName = 'Required';
            }
            return errors;
        },

        onSubmit: values => {
            if (!error) {
                changeUserProfile(values)
                setUserProfileEditMode(false)
            }
        },
    })

    return (
        <form className={styles.aboutBlock} onSubmit={formik.handleSubmit}>
            <h2>Basic Information</h2>
            <div className={styles.basicInfoBlock}>
                <AboutItem title={"Name"}
                           data={profile.fullName}
                           inputValue={formik.values.fullName}
                           classname={styles.nameBlock}
                           editMode={editMode}
                           formikFieldProps={formik.getFieldProps("fullName")}/>
                <AboutItem title={"About me"}
                           data={profile.aboutMe}
                           inputValue={formik.values.aboutMe}
                           classname={styles.aboutMeBlock}
                           editMode={editMode}
                           formikFieldProps={formik.getFieldProps("aboutMe")}/>
                <div className={styles.lookingJobEditModeBlock}>
                    <UniversalCheckbox title={"Looking for a job?"}
                                       formikFieldProps={formik.getFieldProps("lookingForAJob")}
                                       inputValue={formik.values.lookingForAJob}/>
                </div>

                <AboutItem title={"Skills"}
                           inputValue={formik.values.lookingForAJobDescription}
                           data={profile.lookingForAJobDescription}
                           classname={styles.jobDescBlock}
                           editMode={editMode}
                           formikFieldProps={formik.getFieldProps("lookingForAJobDescription")}/>
            </div>

            <h2>Websites and Social Links</h2>
            <div className={styles.linksInfoBlock}>
                {Object.keys(formik.values.contacts).map(key => {
                    // @ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={formik.values.contacts[key]}
                                    editMode={editMode} formikFieldProps={formik.getFieldProps("contacts." + key)}/>
                })}
            </div>
            <UniversalButton title={"save profile"}/>
        </form>
    )
}