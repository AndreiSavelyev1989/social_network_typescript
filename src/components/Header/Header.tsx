import React, {useEffect} from "react";
import styles from "./Header.module.css"
import mainLogo from "../../images/main_logo.png"
import {Login} from "../Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {setAuthUserDataTC} from "../../redux-state/auth-reducer";
import {ProfileType} from "../../redux-state/profile-reducer";

export function Header() {

    const dispatch = useDispatch()
    const isAuth = useSelector<StoreType, boolean>(state => state.auth.isAuth)
    const login = useSelector<StoreType, string | null>(state => state.auth.login)
    const userProfile = useSelector<StoreType, ProfileType | null>(state => state.profilePage.profile)

    useEffect(() => {
        dispatch(setAuthUserDataTC())
    }, [])

    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="logo"/>
            <div className={styles.loginBlock}>
                <Login isAuth={isAuth} login={login} userProfile={userProfile}/>
            </div>
        </header>
    )
}