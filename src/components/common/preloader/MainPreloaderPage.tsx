import React from "react";
import styles from "./MainPreloaderPage.module.scss";
import {TiSocialDribbble} from "react-icons/all";
import {IconContext} from "react-icons/lib";


export const MainPreloaderPage = () => {
    return (
        <div className={styles.mainLogo}>
            <IconContext.Provider value={{color: "#007bff"}}>
            <TiSocialDribbble/>
                </IconContext.Provider>
            <span className={styles.mainLogoText}>SocialJS</span>
        </div>
    )
}