import React from "react";
import {PATH, profileNavData} from "../../common/SidebarData";
import {NavLink} from "react-router-dom";
import styles from "./ProfileNavigation.module.scss"
type PropsType = {
    userId: number | undefined
}

export const ProfileNavigation: React.FC<PropsType> = ({userId}) => {
    return (
        <div className={styles.profNavContainer}>
            {profileNavData.map((item, index) => {
                return (
                    <NavLink to={`${PATH.PROFILE}/${userId}${item.path}`}
                             key={index}
                             activeClassName={styles.profNavActive}
                             className={styles.profNavItem}>
                        <span className={styles.profNavTitle}>{item.title}</span>
                    </NavLink>
                )
            })}
        </div>
    )
}