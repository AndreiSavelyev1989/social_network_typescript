import React from "react";
import {profileNavData} from "../../navbar/SidebarData";
import {NavLink} from "react-router-dom";
import styles from "./ProfileNavigation.module.scss"

export const ProfileNavigation = () => {
    return (
        <div className={styles.profNavContainer}>
            {profileNavData.map((item, index) => {
                return (
                    <NavLink to={item.path}
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