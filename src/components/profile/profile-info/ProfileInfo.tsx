import React from "react";
import styles from "./ProfileInfo.module.scss"
import samurai from "../../../images/profileImg.png"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {ProfileStatusWithHooks} from "./profile-status/ProfileStatusWithHooks";
import {UploadButton} from "./upload-button/UploadButton";
import profileBackgroundImg from "./../../../images/profileBackground.jpg"

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    error: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({changeUserStatus, status, error, profile, changeUserPhoto, isOwner}) => {

    return (
        <div className={styles.content} style={{backgroundImage: `url(${profileBackgroundImg})`}}>
            {profile
                ?
                <>
                    <div className={styles.imageContainer}>
                        <img src={profile.photos.large ? profile.photos.large : samurai} alt="samuraiPhoto"/>
                        <label className={isOwner ? styles.fileContainer : ""} htmlFor="icon-button-file">
                            {isOwner && <UploadButton changeUserPhoto={changeUserPhoto}/>}
                        </label>
                    </div>

                    <div className={styles.userNameTitle}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status}
                                            isOwner={isOwner}
                                            error={error}
                                            changeUserStatus={changeUserStatus}/>
                </>
                : <Preloader/>
            }
        </div>
    )
});
