import React from "react";
import styles from "./ProfileInfo.module.css"
import samurai from "../../../images/profileImg.png"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div>
               <h2>Profile:</h2>
                <img src={props.profile.photos.large ? props.profile.photos.large : samurai} alt="samurai"/>
            </div>
        </div>
    )
}
