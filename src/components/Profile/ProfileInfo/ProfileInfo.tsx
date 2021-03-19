import React from "react";
import styles from "./ProfileInfo.module.css"
import samurai from "../../../images/profileImg.png"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div>
               <h2>Profile:</h2>
                <img src={props.profile.photos.large ? props.profile.photos.large : samurai} alt="samurai-photo"/>
            </div>
            <ProfileStatus status={props.status} changeUserStatus={props.changeUserStatus}/>
        </div>
    )
}
