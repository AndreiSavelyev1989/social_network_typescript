import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    error: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
}

export const Profile: React.FC<ProfilePropsType> = React.memo(({profile, error, status, changeUserStatus, changeUserPhoto, isOwner} ) => {
    return (
        <div className={styles.profileWrapper}>
                <ProfileInfo
                    isOwner={isOwner}
                    profile={profile}
                    error={error}
                    status={status}
                    changeUserPhoto={changeUserPhoto}
                    changeUserStatus={changeUserStatus}/>
                <MyPostsContainer/>
        </div>
    )
});