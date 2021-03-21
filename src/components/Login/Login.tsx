import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";
import {StoreType} from "../../redux-state/redux-store";
import {AuthUserType, loginTC} from "../../redux-state/auth-reducer";
import style from "./Login.module.css"


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()
    const {error, isLoggedIn} = useSelector<StoreType, AuthUserType>(state => state.auth);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length > 15) {
                errors.password = 'Password must be 15 characters or less';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be 8 characters or more ';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
        },
    })
    if (isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <>
            <div className={style.commonContainer}>
                <h1 className={style.title}>Login Here</h1>
                <div className={style.error}>{error ? error : null}</div>
                <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                    <input
                        className={style.input}
                        type={"text"}
                        placeholder={"Email"}
                        {...formik.getFieldProps("email")}/>
                    {formik.touched.email && formik.errors.email ?
                        <div className={style.registrationError}>{formik.errors.email}</div> : null}

                    <input
                        className={style.input}
                        type={"password"}
                        placeholder={"Password"}
                        {...formik.getFieldProps("password")}/>
                    {formik.touched.password && formik.errors.password ?
                        <div className={style.registrationError}>{formik.errors.password}</div> : null}

                    <div className={style.checkbox}>
                        <input
                            className={style.input}
                            type={"checkbox"}
                            {...formik.getFieldProps("rememberMe")}/>
                        <span>RememberMe</span>
                    </div>

                    <button type={"submit"} name={"Login"}>login</button>
                </form>
            </div>
        </>
    )
}