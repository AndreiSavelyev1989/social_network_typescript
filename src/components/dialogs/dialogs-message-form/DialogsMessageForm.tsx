import {useFormik} from "formik";
import style from "../../login/Login.module.scss";
import styles from "./DialogsMessageForm.module.scss";
import React from "react";
import {UniversalInput} from "../../common/universal-input/UniversalInput";
import {UniversalButton} from "../../common/universal-button/UniversalButton";

type FormikErrorType = {
    newMessage?: string
}

type PropsType = {
    addNewMessage: (newMessage: string) => void
}
export const DialogsMessageForm: React.FC<PropsType> = React.memo(({addNewMessage}) => {
    const formik = useFormik({
        initialValues: {
            newMessage: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.newMessage.length > 100) {
                errors.newMessage = 'Max length is 100 symbols';
            }
            return errors;
        },

        onSubmit: values => {
            addNewMessage(values.newMessage)
            formik.resetForm({
                values: {newMessage: '',}
            })
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className={styles.formBlock}>
            <div className={styles.formContainer}>
                <div className={styles.inputBlock}>
                    <UniversalInput type={"text"}
                                    placeholder={"New message"}
                                    formikFieldProps={formik.getFieldProps("newMessage")}/>
                    {formik.touched.newMessage && formik.errors.newMessage ?
                        <div className={style.registrationError}>{formik.errors.newMessage}</div> : null}
                </div>

                <div className={styles.buttonBlock}>
                    <UniversalButton
                        title={"send"}
                        type={"submit"}>Send message</UniversalButton>
                </div>
            </div>
        </form>
    )
})