import React, {useState} from "react";
import styles from "./About.module.scss";
import {ProfileType} from "../../../../redux-state/profile-reducer";
import {Preloader} from "../../../common/preloader/Preloader";
import {UserContacts} from "./user-contacts/UserContacts";

type PropsType = {
    profile: ProfileType | null
    changeUserProfile: (profile: ProfileType) => void
    setUserProfileEditMode: (editMode: boolean) => void
    isOwner: boolean
    error: string
    profileEditMode: boolean
}

export const About: React.FC<PropsType> = React.memo(({profile, changeUserProfile, isOwner, error, profileEditMode, setUserProfileEditMode}) => {

    return (
        <div className={styles.aboutContainer}>
            {profile
                ? <UserContacts profile={profile}
                                setUserProfileEditMode={setUserProfileEditMode}
                                changeUserProfile={changeUserProfile}
                                isOwner={isOwner}
                                error={error}
                                profileEditMode={profileEditMode}/>
                : <Preloader/>
            }
        </div>
    )
})



