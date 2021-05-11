import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss"
import {AuthMe} from "./auth-me/AuthMe";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {authMe, AuthUserType} from "../../redux-state/auth-reducer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {Navbar} from "../navbar/Navbar";
import {RiMenu3Line, TiSocialDribbble} from "react-icons/all";
import {IconContext} from "react-icons/lib";
import {NavLink} from "react-router-dom";


export const Header = React.memo(() => {

    const dispatch = useDispatch()
    const {isAuth, login, isLoggedIn, error} = useSelector<StoreType, AuthUserType>(state => state.auth)
    const userProfile = useSelector<StoreType, ProfileType | null>(state => {
        const {profile} = state.profilePage;
        return profile;
    })
    const [loginSidebar, setLoginSidebar] = useState(false)
    const showLoginSidebar = () => setLoginSidebar(!loginSidebar)

    useEffect(() => {
        dispatch(authMe())
    }, [isLoggedIn])

    return (
        <header className={styles.header}>
            <div className={styles.headerMainBlock}>
                <div className={styles.headerNavBlock}>
                    <div className={styles.mainLogo}>
                        <IconContext.Provider value={{color: "#007bff"}}>
                            <TiSocialDribbble/>
                        </IconContext.Provider>
                        <span className={styles.mainLogoText}>SocialJS</span>
                    </div>
                    <Navbar/>
                </div>
                <div className={styles.loginBlock}>
                    <AuthMe
                        loginSidebar={loginSidebar}
                        error={error}
                        isAuth={isAuth}
                        login={login}
                        userProfile={userProfile}
                        dispatch={dispatch}/>
                </div>
                <div className={styles.loginBurger}>
                    <NavLink to={"#"} onClick={showLoginSidebar}>
                        <div className={styles.burgerWrapper}>
                            <RiMenu3Line className={styles.burger}/>
                            <div className={styles.burgerBackground}></div>
                            <div className={loginSidebar ? `${styles.burgerLoginBlock} ${styles.burgerActive}` : styles.burgerLoginBlock}>
                                <AuthMe
                                    loginSidebar={loginSidebar}
                                    error={error}
                                    isAuth={isAuth}
                                    login={login}
                                    userProfile={userProfile}
                                    dispatch={dispatch}/>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    )
});