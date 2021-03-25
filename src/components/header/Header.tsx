import React, {useEffect} from "react";
import styles from "./Header.module.css"
import mainLogo from "../../images/main_logo.png"
import {AuthMe} from "../auth-me/AuthMe";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {AuthUserType, authMe} from "../../redux-state/auth-reducer";
import {ProfileType} from "../../redux-state/profile-reducer";


export function Header() {

    const dispatch = useDispatch()
    const {isAuth, login, isLoggedIn} = useSelector<StoreType, AuthUserType>(state => state.auth)
    const userProfile = useSelector<StoreType, ProfileType | null>(state => state.auth.profile)

    useEffect(() => {
        dispatch(authMe())
    }, [isLoggedIn])

    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="logo"/>
            <div className={styles.loginBlock}>
                <AuthMe
                    isAuth={isAuth}
                    isLoggedIn={isLoggedIn}
                    login={login}
                    userProfile={userProfile}
                    dispatch={dispatch}/>
            </div>
        </header>
    )
}