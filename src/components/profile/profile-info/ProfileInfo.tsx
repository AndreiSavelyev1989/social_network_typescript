import React from "react";
import styles from "./ProfileInfo.module.scss"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {ProfileStatusWithHooks} from "./profile-status/ProfileStatusWithHooks";
import {UploadButton} from "./upload-button/UploadButton";
import profileBackgroundImg from "./../../../images/profileBackground.jpg"
import userAvatar from "../../../images/userAvatar.jpg";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({changeUserStatus, status, profile, changeUserPhoto, isOwner}) => {

    return (
        <div className={styles.contentContainer} style={{backgroundImage: `url(${profileBackgroundImg})`}}>
            <div className={styles.contentBlock}>
                {profile
                    ?
                    <>
                        <div className={styles.imageContainer}>
                            <img src={profile.photos.large ? profile.photos.large : userAvatar} alt="user-avatar"/>
                            <label className={isOwner ? styles.fileContainer : ""} htmlFor="icon-button-file">
                                {isOwner && <UploadButton changeUserPhoto={changeUserPhoto}/>}
                            </label>
                        </div>

                        <div className={styles.userNameTitle}>{profile.fullName}</div>
                        <ProfileStatusWithHooks status={status}
                                                isOwner={isOwner}
                                                changeUserStatus={changeUserStatus}/>
                    </>
                    : <Preloader/>
                }
            </div>

        </div>
    )
});
