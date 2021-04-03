import React, {ChangeEvent} from "react";
import styles from "./ProfileInfo.module.scss"
import samurai from "../../../images/profileImg.png"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileType} from "../../../redux-state/profile-reducer";
import {ProfileStatusWithHooks} from "./profile-status/ProfileStatusWithHooks";
import {UploadButton} from "./upload-button/UploadButton";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    error: string
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    isOwner: boolean
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo(({changeUserStatus, status, error, profile, changeUserPhoto, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }

    // const onChangeUserPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         changeUserPhoto(e.target.files[0])
    //     }
    // }
    return (
        <div className={styles.content}>
            <h2>Profile:</h2>
            <div className={styles.imageContainer}>
                <img src={profile.photos.large ? profile.photos.large : samurai} alt="samuraiPhoto"/>
                {/*{isOwner && <div className={styles.fileContainer}>*/}
                {/*    <input type="file" onChange={onChangeUserPhoto}/>*/}
                {/*</div>}*/}
                {isOwner && <div className={styles.fileContainer}><UploadButton changeUserPhoto={changeUserPhoto}/></div>}
            </div>
            {/*<ProfileStatus status={props.status} changeUserStatus={props.changeUserStatus}/>*/}
            <ProfileStatusWithHooks status={status}
                                    isOwner={isOwner}
                                    error={error}
                                    changeUserStatus={changeUserStatus}/>
        </div>
    )
});
