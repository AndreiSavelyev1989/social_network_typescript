import React from "react";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"
import {LoginForm} from "./login-form/LoginForm";
import {Dispatch} from "redux";

type PropsType = {
    dispatch: Dispatch<any>
    error: string
    isLoggedIn: boolean
}
export const Login: React.FC<PropsType> = ({dispatch, error, isLoggedIn}) => {

    if (isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <>
            <div className={style.commonContainer}>
                <h1 className={style.title}>Login Here</h1>
                <LoginForm dispatch={dispatch} error={error}/>
            </div>
        </>
    )
}