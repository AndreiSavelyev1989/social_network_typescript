import React from "react";
import {UniversalInput} from "../../../../common/universal-input/UniversalInput";

type PropsType = {
    title: string
    data: any
    classname?: any
    editMode?: boolean
    formikFieldProps?: any
    inputValue?: any
}

export const AboutItem:React.FC<PropsType> = ({title, data, classname, editMode, formikFieldProps, inputValue}) => {
    return (
        <div className={classname}>
            <div>{title}</div>
            {editMode
                ? <UniversalInput type={"text"} className={"login"} value={inputValue} formikFieldProps={formikFieldProps}/>
                : <div>{data ? data : "Empty field"}</div>}
        </div>
    )
}