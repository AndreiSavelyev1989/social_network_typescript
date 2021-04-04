import React, {useEffect} from "react";
import styles from "./Header.module.scss"
import mainLogo from "../../images/main_logo.png"
import {AuthMe} from "./auth-me/AuthMe";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {authMe, AuthUserType} from "../../redux-state/auth-reducer";
import {ProfileType} from "../../redux-state/profile-reducer";
import {Navbar} from "../navbar/Navbar";
import {TiSocialDribbble} from "react-icons/all";
import {IconContext} from "react-icons/lib";


export const Header = React.memo(() => {

    const dispatch = useDispatch()
    const {isAuth, login, isLoggedIn, error} = useSelector<StoreType, AuthUserType>(state => state.auth)
    const userProfile = useSelector<StoreType, ProfileType | null>(state => state.auth.authProfile)

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
                        error={error}
                        isAuth={isAuth}
                        login={login}
                        userProfile={userProfile}
                        dispatch={dispatch}/>
                </div>
            </div>
        </header>
    )
});