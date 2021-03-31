import React from "react";
import styles from "./Profile.module.css"
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    error: string
    changeUserStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(({profile, error, status, changeUserStatus} ) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo
                profile={profile}
                error={error}
                status={status}
                changeUserStatus={changeUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
});