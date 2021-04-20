import React from "react";

type PropsType = {
    title: string
    data: any
    classname: any
}

export const AboutItem:React.FC<PropsType> = ({title, data, classname}) => {
    return (
        <div className={classname}>
            <div>{title}</div>
            <div>{data}</div>
        </div>
    )
}