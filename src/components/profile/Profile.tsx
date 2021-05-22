import React from "react";
import styles from "./Profile.module.scss"
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./my-posts/MyPostsContainer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {ProfileNavigation} from "./profile-navigation/ProfileNavigation";
import {Route} from "react-router-dom";
import {PATH} from "../common/SidebarData";
import {About} from "./profile-info/about-me/About";
import {MyFriends} from "./profile-info/my-friends/MyFriends";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
    paramsUserId: number
}

export const Profile: React.FC<ProfilePropsType> = React.memo(({profile, status, changeUserStatus, changeUserPhoto, isOwner, paramsUserId}) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                changeUserPhoto={changeUserPhoto}
                changeUserStatus={changeUserStatus}/>
            <ProfileNavigation userId={isOwner ? profile?.userId : paramsUserId}/>
           <div className={styles.profileNavPanel}>
                <Route path={`${PATH.PROFILE}/${paramsUserId}${PATH.ABOUT}`} render={() => <About profile={profile}/>}/>
                <Route path={`${PATH.PROFILE}/${paramsUserId}${PATH.FRIENDS}`} render={() => <MyFriends/>}/>
                <Route path={`${PATH.PROFILE}/${paramsUserId}${PATH.POSTS}`} render={() => <MyPostsContainer/>}/>
            </div>
        </div>
    )
});