import style from "../Login.module.css";
import React from "react";
import {useFormik} from "formik";
import {Dispatch} from "redux";
import {loginTC} from "../../../redux-state/auth-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

type PropsType = {
    dispatch: Dispatch<any>
}

export const LoginForm: React.FC<PropsType> = ({dispatch}) => {
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
            <input
                className={style.input}
                type={"text"}
                placeholder={"Email"}
                required
                {...formik.getFieldProps("email")}/>
            {formik.touched.email && formik.errors.email ?
                <div className={style.registrationError}>{formik.errors.email}</div> : null}

            <input
                className={style.input}
                type={"password"}
                placeholder={"Password"}
                required
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

            <button type={"submit"}>Login</button>
        </form>
    )
}