import React from "react";
import styles from "./About.module.scss";
import {ProfileType} from "../../../../redux-state/profile-reducer";
import {Preloader} from "../../../common/preloader/Preloader";
import {AboutItem} from "./about-item/AboutItem";

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
                        <AboutItem title={"Name"} data={profile.fullName} classname={styles.nameBlock}/>
                        <AboutItem title={"About me"} data={profile.aboutMe} classname={styles.aboutMeBlock}/>
                        <AboutItem title={"Looking for a job"} data={profile.lookingForAJob ? "true" : "false"}
                                   classname={styles.lookingJobBlock}/>
                        <AboutItem title={"Job description"} data={profile.lookingForAJobDescription}
                                   classname={styles.jobDescBlock}/>
                    </div>

                    <h2>Websites and Social Links</h2>
                    <div className={styles.linksInfoBlock}>
                        <AboutItem title={"Facebook"} data={profile.contacts.facebook}
                                   classname={styles.facebookBlock}/>
                        <AboutItem title={"Github"} data={profile.contacts.github} classname={styles.githubBlock}/>
                        <AboutItem title={"Instagram"} data={profile.contacts.instagram}
                                   classname={styles.instagramBlock}/>
                        <AboutItem title={"MainLink"} data={profile.contacts.mainLink}
                                   classname={styles.mainLinkBlock}/>
                        <AboutItem title={"Twitter"} data={profile.contacts.twitter} classname={styles.twitterBlock}/>
                        <AboutItem title={"VK"} data={profile.contacts.vk} classname={styles.vkBlock}/>
                        <AboutItem title={"Website"} data={profile.contacts.website} classname={styles.websiteBlock}/>
                        <AboutItem title={"Youtube"} data={profile.contacts.youtube} classname={styles.youtubeBlock}/>
                    </div>
                </div>
                : <Preloader/>
            }
        </div>
    )
})