import React from "react";
import styles from "./AboutMe.module.scss";
import {ProfileType} from "../../../../redux-state/profile-reducer";
import {Preloader} from "../../../common/preloader/Preloader";

type PropsType = {
    profile: ProfileType | null
}
export const About: React.FC<PropsType> = React.memo(({profile}) => {

    return (
        <div className={styles.aboutContainer}>
            {profile ?
                <div className={styles.aboutBlock}>
                    <h2>Basic Information</h2>
                    <div className={styles.basicInfoBlock}>

                        <div className={styles.nameBlock}>
                            <div>Name</div>
                            <div>{profile && profile.fullName}</div>
                        </div>

                        <div className={styles.aboutMeBlock}>
                            <div>About me</div>
                            <div>{profile && profile.aboutMe}</div>
                        </div>

                        <div className={styles.lookingJobBlock}>
                            <div>Looking for a job</div>
                            <div>{profile && profile.lookingForAJob ? "true" : "false"}</div>
                        </div>

                        <div className={styles.jobDescBlock}>
                            <div>Job description</div>
                            <div>{profile && profile.lookingForAJobDescription}</div>
                        </div>

                    </div>

                    <h2>Websites and Social Links</h2>
                    <div className={styles.linksInfoBlock}>
                        <div className={styles.facebookBlock}>
                            <div>Facebook</div>
                            <div>{profile && profile.contacts.facebook}</div>
                        </div>

                        <div className={styles.githubBlock}>
                            <div>Github</div>
                            <div>{profile && profile.contacts.github}</div>
                        </div>

                        <div className={styles.instagramBlock}>
                            <div>Instagram</div>
                            <div>{profile && profile.contacts.instagram}</div>
                        </div>

                        <div className={styles.mainLinkBlock}>
                            <div>MainLink</div>
                            <div>{profile && profile.contacts.mainLink}</div>
                        </div>

                        <div className={styles.twitterBlock}>
                            <div>Twitter</div>
                            <div>{profile && profile.contacts.twitter}</div>
                        </div>

                        <div className={styles.vkBlock}>
                            <div>VK</div>
                            <div>{profile && profile.contacts.vk}</div>
                        </div>

                        <div className={styles.websiteBlock}>
                            <div>Website</div>
                            <div>{profile && profile.contacts.website}</div>
                        </div>

                        <div className={styles.youtubeBlock}>
                            <div>Youtube</div>
                            <div>{profile && profile.contacts.youtube}</div>
                        </div>

                    </div>
                </div>
                : <Preloader/>
            }
        </div>
    )
})