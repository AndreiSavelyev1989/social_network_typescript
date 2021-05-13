import React, {ChangeEvent, KeyboardEvent} from "react";
import {Preloader} from "../../../common/preloader/Preloader";
import styles from "./ProfileStatusWithHooks.module.scss";
import {UniversalInput} from "../../../common/universal-input/UniversalInput";

type PropsType = {
    status: string
    changeUserStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatusWithHooks: React.FC<PropsType> = React.memo(({status, changeUserStatus, isOwner}) => {
    const [editMode, setEditMode] = React.useState(false)
    const [localStatus, setLocalStatus] = React.useState(status)

    React.useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const activateEditMode = () => {
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
    return (
        <>
            <div className={styles.statusContainer}>
                {editMode && isOwner
                    ? <UniversalInput
                        type="text"
                        className={"status"}
                        autoFocus={true}
                        onChange={onChangeStatusHandler}
                        onBlur={deactivateEditMode}
                        onKeyUp={onKeyDeactivateEditMode}
                        value={localStatus}/>
                    :
                    <div className={styles.statusBlock}>
                        <span className={styles.status}
                              onClick={activateEditMode}>
                            {status === localStatus
                                ? status || "Empty status"
                                : <Preloader/>}
                        </span>
                        <span className={isOwner ? styles.statusDescription : styles.noDesc}>
                            Click to change status !!!
                        </span>
                    </div>
                }
            </div>
        </>
    )
})
