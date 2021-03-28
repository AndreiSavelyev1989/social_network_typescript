import {useFormik} from "formik";
import style from "../../login/Login.module.css";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import React from "react";

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
        <form className={style.formBlock} onSubmit={formik.handleSubmit}>
            <TextField
                className={style.input}
                type={"text"}
                placeholder={"New post"}
                variant={"outlined"}
                label={"Add new message"}
                required
                {...formik.getFieldProps("newMessage")}/>
            {formik.touched.newMessage && formik.errors.newMessage ?
                <div className={style.registrationError}>{formik.errors.newMessage}</div> : null}
            <Button
                variant={"contained"}
                color={"primary"}
                size={"small"}
                type={"submit"}>Send message</Button>
        </form>
    )
})