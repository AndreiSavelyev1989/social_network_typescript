import React, {Dispatch} from "react";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../../redux-state/profile-reducer";
import styles from "./AuthMe.module.scss";
import style from "../../login/Login.module.scss";
import samurai from "../../../images/profileImg.png"
import {logoutTC} from "../../../redux-state/auth-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import {UniversalButton} from "../../common/universal-button/UniversalButton";

type LoginPropsType = {
    isAuth: boolean
    login: string | null
    userProfile: ProfileType | null
    dispatch: Dispatch<any>
    loginSidebar: boolean
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
                            ? <NavLink to={"/profile"}><img src={props.userProfile ? props.userProfile.photos.large : samurai}
                                                  alt={'userPhoto'}/></NavLink>

                            : <Preloader/>
                        }
                        <div className={styles.login}>{props.login}</div>
                        <div className={styles.logout}>
                            <UniversalButton title={"Log out"} callback={logout}/>
                        </div>
                    </div>
                    : <div className={styles.loginLink}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </div>
                }
            </div>
        </>
    )
})