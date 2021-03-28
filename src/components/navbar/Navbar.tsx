import React from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {SidebarContainer} from "../sidebar/SidebarContainer";

export const Navbar = React.memo(() => (
    <nav className={styles.nav}>
        <div>
            <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
        </div>
        <div>
            <NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink>
        </div>
        <div className={styles.settings}>
            <NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink>
        </div>
        <div>
            <SidebarContainer/>
        </div>
    </nav>
));