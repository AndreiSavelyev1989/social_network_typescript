import React from "react";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux-state/profile-reducer";
import styles from "./Login.module.css"
import samurai from "../../images/profileImg.png"

type LoginPropsType = {
    isAuth: boolean
    login: string | null
    userProfile: ProfileType | null
}
export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={styles.loginBlock}>
            {props.isAuth && props.login
                ? <div className={styles.userBlock}>
                    <img className={styles.userPhoto} src={props.userProfile ? props.userProfile.photos.large : samurai} alt={'user-photo'} />
                    <div className={styles.login}>{props.login}</div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    )
}