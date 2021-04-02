import React, {Dispatch} from "react";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../../redux-state/profile-reducer";
import styles from "./AuthMe.module.scss";
import style from "../../login/Login.module.css";
import samurai from "../../../images/profileImg.png"
import {logoutTC} from "../../../redux-state/auth-reducer";
import {Preloader} from "../../common/preloader/Preloader";

type LoginPropsType = {
    isAuth: boolean
    login: string | null
    userProfile: ProfileType | null
    dispatch: Dispatch<any>
    error: string
}

export const AuthMe: React.FC<LoginPropsType> = React.memo((props) => {

    const logout = () => {
        props.dispatch(logoutTC())
    }

    return (
        <>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.userBlock}>
                        {props.userProfile
                            ? <img src={props.userProfile ? props.userProfile.photos.large : samurai}
                                   alt={'userPhoto'}/>
                            : <Preloader/>
                        }
                        <div className={styles.login}>{props.login}</div>
                        <div>
                            <button onClick={logout}>Logout</button>
                        </div>
                        {props.error && <div className={style.error}>{props.error}</div>}
                    </div>
                    : <div className={styles.loginLink}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                }
            </div>
        </>
    )
})