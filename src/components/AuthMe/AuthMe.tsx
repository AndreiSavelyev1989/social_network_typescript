import React, {Dispatch} from "react";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux-state/profile-reducer";
import styles from "./AuthMe.module.css"
import samurai from "../../images/profileImg.png"
import {logoutTC} from "../../redux-state/auth-reducer";
import {Preloader} from "../common/Preloader/Preloader";

type LoginPropsType = {
    isAuth: boolean
    login: string | null
    userProfile: ProfileType | null
    dispatch: Dispatch<any>
    isLoggedIn: boolean
}

export const AuthMe: React.FC<LoginPropsType> = (props) => {

    const logout = () => {
        props.dispatch(logoutTC())
    }
    return (
        <>
            <div className={styles.loginBlock}>
                {props.isAuth && props.isLoggedIn
                    ? <div className={styles.userBlock}>
                        {props.userProfile
                            ? <img className={styles.userPhoto}
                                   src={props.userProfile ? props.userProfile.photos.large : samurai}
                                   alt={'user-photo'}/>
                            : <Preloader/>
                        }
                        <div className={styles.login}>{props.login}</div>
                        <div>
                            <button onClick={logout}>Logout</button>
                        </div>
                    </div>
                    : <div className={styles.loginLink}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                }
            </div>
        </>
    )
}