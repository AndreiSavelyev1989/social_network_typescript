import style from "./LoginForm.module.scss";
import React from "react";
import {useFormik} from "formik";
import {Dispatch} from "redux";
import {loginTC} from "../../../redux-state/auth-reducer";
import {UniversalInput} from "../../common/universal-input/UniversalInput";
import {UniversalCheckbox} from "../../common/universal-checkbox/UniversalCheckbox";
import {UniversalButton} from "../../common/universal-button/UniversalButton";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

type PropsType = {
    dispatch: Dispatch<any>
}

export const LoginForm: React.FC<PropsType> = React.memo(({dispatch}) => {
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
    return (
        <form className={style.formBlock} onSubmit={formik.handleSubmit}>
            <div className={style.descriptionBlock}>
                <p>Enter your email address and password to access admin panel.</p>
            </div>
            <label htmlFor={"inputEmail"} className={style.emailTitle}>
                Email address
            </label>
            <UniversalInput
                id={"inputEmail"}
                type={"text"}
                placeholder={"Email"}
                className={"login"}
                formikFieldProps={formik.getFieldProps("email")}/>
            {formik.touched.email && formik.errors.email ?
                <div className={style.error}>{formik.errors.email}</div> : null}
            <div className={style.passwordBlock}>
                <label htmlFor={"inputPassword"} className={style.passwordTitle}>
                    Password
                </label>
                <div className={style.forgotPasswordTitle}>
                    Forgot password?
                </div>
            </div>

            <UniversalInput
                id={"inputPassword"}
                type={"password"}
                placeholder={"Password"}
                className={"login"}
                formikFieldProps={formik.getFieldProps("password")}/>
            {formik.touched.password && formik.errors.password ?
                <div className={style.error}>{formik.errors.password}</div> : null}

            <div className={style.confirmBlock}>
                <UniversalCheckbox title={"Remember me"}/>
                <div className={style.button}>
                    <UniversalButton title={"Log in"}/>
                </div>
            </div>
        </form>
    )
})