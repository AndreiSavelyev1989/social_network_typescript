import React from "react";
import {Redirect} from "react-router-dom";
import style from "./Login.module.scss"
import {LoginForm} from "./login-form/LoginForm";
import {Dispatch} from "redux";

type PropsType = {
    dispatch: Dispatch<any>
    error: string
    isAuth: boolean
}
export const Login: React.FC<PropsType> = React.memo(({dispatch, error, isAuth}) => {

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <>
            <div className={style.loginContainer}>
                <div className={style.loginBlock}>
                    <h1 className={style.title}>Log in </h1>
                    <LoginForm dispatch={dispatch} error={error}/>
                </div>
                <div className={style.animationContainer}>
                    <div className={style.circleSmall}></div>
                    <div className={style.circleMedium}></div>
                    <div className={style.circleLarge}></div>
                    <div className={style.circleXLarge}></div>
                    <div className={style.circleXXLarge}></div>
                </div>
            </div>

        </>
    )
})