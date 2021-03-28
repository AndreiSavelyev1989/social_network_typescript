import React from "react";
import styles from "./ProfileInfo.module.css"
import samurai from "../../../images/profileImg.png"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {ProfileStatus} from "./profile-status/ProfileStatus";
import {ProfileStatusWithHooks} from "./profile-status/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (status: string) => void
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div>
                <h2>Profile:</h2>
                <img src={props.profile.photos.large ? props.profile.photos.large : samurai} alt="samuraiPhoto"/>
            </div>
            {/*<ProfileStatus status={props.status} changeUserStatus={props.changeUserStatus}/>*/}
            <ProfileStatusWithHooks status={props.status} changeUserStatus={props.changeUserStatus}/>
        </div>
    )
});
