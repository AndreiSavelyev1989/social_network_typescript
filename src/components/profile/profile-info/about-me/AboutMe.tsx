import React from "react";
import styles from "./AboutMe.module.scss";
import {ProfileType} from "../../../../redux-state/profile-reducer";
import {Link} from "react-router-dom";

type PropsType = {
    profile: ProfileType | null
}
export const AboutMe: React.FC<PropsType> = React.memo(({profile}) => {

    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.aboutBlock}>
                <div>
                    <h2>Basic Information</h2>
                    <div>
                        {profile && profile.fullName}
                    </div>
                    <div>
                        {profile && profile.aboutMe}
                    </div>
                    <div>
                        {profile && profile.lookingForAJob}
                    </div>
                    <div>
                        {profile && profile.lookingForAJobDescription}
                    </div>
                </div>


                <p>contacts:</p>
                <div>
                    {profile && profile.contacts.facebook}
                </div>
                <div>
                    {profile && profile.contacts.github}
                </div>
                <div>
                    {profile && profile.contacts.instagram}
                </div>
                <div>
                    {profile && profile.contacts.mainLink}
                </div>
                <div>
                    {profile && profile.contacts.twitter}
                </div>
                <div>
                    <Link to={''}>{profile && profile.contacts.vk}</Link>
                </div>
                <div>
                    {profile && profile.contacts.website}
                </div>
                <div>
                    {profile && profile.contacts.youtube}
                </div>
            </div>

        </div>
    )
})