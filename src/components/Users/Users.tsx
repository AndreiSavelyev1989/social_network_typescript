import React from "react";
import {User} from "./User/User";
import {UserType} from "../../redux-state/users-reducer";
import styles from "./Users.module.css"
import {Pagination} from "../common/Pagination";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onCurrentPage: (pageNumber: any) => void
    portionSize: number
}


export function Users(props: UsersPropsType) {

    return (

        <div>
            <div className={styles.pagination}>
                <Pagination
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onCurrentPage={props.onCurrentPage}
                    portionSize={props.portionSize}
                />
            </div>

            {props.users.map(u => <User
                key={u.id}
                id={u.id}
                userPhoto={u.photos}
                followed={u.followed}
                fullName={u.name}
                status={u.status}
                follow={props.follow}
                unfollow={props.unfollow}
            />)}
        </div>
    )
}
