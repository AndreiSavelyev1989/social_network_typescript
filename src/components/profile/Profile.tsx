import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {ProfileNavigation} from "./profile-navigation/ProfileNavigation";
import {Route} from "react-router-dom";
import {PATH} from "../navbar/SidebarData";
import {About} from "./profile-info/about-me/AboutMe";
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
                <Route path={`${PATH.PROFILE}${PATH.ABOUT}`} render={() => <About profile={profile}/>}/>
                <Route path={`${PATH.PROFILE}${PATH.FRIENDS}`} render={() => <MyFriends/>}/>
                <Route path={`${PATH.PROFILE}${PATH.POSTS}`} render={() => <MyPostsContainer/>}/>
            </div>
        </div>
    )
});