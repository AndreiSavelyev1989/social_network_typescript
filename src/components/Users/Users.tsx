import React from "react";
import {User} from "./User/User";
import {UserType} from "../../redux-state/users-reducer";
import styles from "./Users.module.css"
import {Pagination} from "../common/Pagination/Pagination";
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onCurrentPage: (pageNumber: any) => void
    portionSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export function Users(props: UsersPropsType) {
    return (
        <div>
            {props.isFetching ? <Preloader/> : null}
            <div className={styles.pagination}>
                <Pagination
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onCurrentPage={props.onCurrentPage}
                    portionSize={props.portionSize}
                    isFetching={props.isFetching}
                />
            </div>
            {props.users.map(u => <User
                key={u.id}
                id={u.id}
                userPhoto={u.photos}
                followed={u.followed}
                fullName={u.name}
                status={u.status}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />)}
        </div>
    )
}
