import {ProfileType} from "../../../../../redux-state/profile-reducer";
import React, {useState} from "react";
import styles from "../About.module.scss";
import {AboutItem} from "../about-item/AboutItem";
import {Contact} from "./contact/Contact";
import {UserContactsForm} from "./UserContactsForm";
import {UniversalButton} from "../../../../common/universal-button/UniversalButton";

type UserContactsPropsType = {
    profile: ProfileType
    changeUserProfile: (profile: ProfileType) => void
    setUserProfileEditMode: (editMode: boolean) => void
    isOwner: boolean
    error: string
    profileEditMode: boolean
}

export const UserContacts: React.FC<UserContactsPropsType> = ({profile, changeUserProfile, isOwner,
                                                                  error, profileEditMode, setUserProfileEditMode}) => {
    // const [editMode, setEditMode] = useState(false)

    const setEditMode = () => {
        setUserProfileEditMode(true)
    }

    return <>
        {profileEditMode
            ? <UserContactsForm
                error={error}
                changeUserProfile={changeUserProfile}
                setUserProfileEditMode={setUserProfileEditMode}
                editMode={profileEditMode}
                profile={profile}/>
            : <div className={styles.aboutBlock}>
                <h2>Basic Information</h2>
                <div className={styles.basicInfoBlock}>
                    <AboutItem title={"Name"} data={profile.fullName} classname={styles.nameBlock}/>
                    <AboutItem title={"About me"} data={profile.aboutMe} classname={styles.aboutMeBlock}/>
                    <AboutItem title={"Looking for a job"} data={profile.lookingForAJob ? "yes" : "no"}
                               classname={styles.lookingJobBlock}/>
                    <AboutItem title={"Skills"} data={profile.lookingForAJobDescription}
                               classname={styles.jobDescBlock}/>
                </div>

                <h2>Websites and Social Links</h2>
                <div className={styles.linksInfoBlock}>
                    {Object.keys(profile.contacts).map(key => {
                        // @ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                {isOwner && <UniversalButton callback={setEditMode} title={"Edit profile"}/>}
            </div>
        }
    </>
}