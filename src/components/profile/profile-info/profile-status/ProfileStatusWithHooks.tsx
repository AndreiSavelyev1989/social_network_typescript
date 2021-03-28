import React, {ChangeEvent, KeyboardEvent} from "react";
import {Preloader} from "../../../common/preloader/Preloader";

type PropsType = {
    status: string
    changeUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<PropsType> = React.memo(({status, changeUserStatus}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [localStatus, setLocalStatus] = React.useState(status)

    React.useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activateEditMode =() => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        changeUserStatus(localStatus)
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const onKeyDeactivateEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setEditMode(false)
            changeUserStatus(localStatus)
        }
    }
    console.log("Status")
    return (
        <div>Status:
            {editMode
                ? <input type="text"
                         autoFocus={true}
                         onChange={onChangeStatusHandler}
                         onBlur={deactivateEditMode}
                         onKeyUp={onKeyDeactivateEditMode}
                         value={localStatus}/>
                :
                <span onDoubleClick={activateEditMode}>{status === localStatus ? status || "Empty status" : <Preloader/>}</span>
            }
        </div>
    )
})
