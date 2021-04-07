import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {ProfileNavigation} from "./profile-navigation/ProfileNavigation";
import {Route} from "react-router-dom";
import {PATH} from "../navbar/SidebarData";
import {AboutMe} from "./profile-info/about-me/AboutMe";
import {MyFriends} from "./profile-info/my-friends/MyFriends";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    error: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
}

export const Profile: React.FC<ProfilePropsType> = React.memo(({profile, error, status, changeUserStatus, changeUserPhoto, isOwner}) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                error={error}
                status={status}
                changeUserPhoto={changeUserPhoto}
                changeUserStatus={changeUserStatus}/>
            <ProfileNavigation/>
            <div className={styles.profileNavPanel}>
                <Route path={`${PATH.ABOUT_ME}`} render={() => <AboutMe/>}/>
                <Route path={`${PATH.MY_FRIENDS}`} render={() => <MyFriends/>}/>
                <Route path={`${PATH.MY_POSTS}`} render={() => <MyPostsContainer />}/>
            </div>
        </div>
    )
});