import React from "react";
import styles from "../../About.module.scss";
import {UniversalInput} from "../../../../../common/universal-input/UniversalInput";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
    editMode?: boolean
    formikFieldProps?: any
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue, editMode, formikFieldProps}) => {
    return <>
        <div className={styles.contactBlock}>
            <div>{contactTitle}</div>
            {editMode
                ? <UniversalInput type={"text"} className={"login"} value={contactValue} formikFieldProps={formikFieldProps}/>
                : <div>{contactValue ? contactValue : "Empty field"}</div>
            }
        </div>
    </>
}