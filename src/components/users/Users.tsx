import React from "react";
import {User} from "./user/User";
import {UserType} from "../../redux-state/users-reducer";
import styles from "./Users.module.scss"
import {Pagination} from "../common/pagination/Pagination";
import {Preloader} from "../common/preloader/Preloader";

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
    userBackground: string
}


export const Users = React.memo((props: UsersPropsType) => (
    <div className={styles.usersContainer}>
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
        {props.isFetching
            ? <Preloader/>
            : props.users.map(u => <User
                key={u.id}
                userId={u.id}
                userBackground={props.userBackground}
                userPhoto={u.photos}
                followed={u.followed}
                fullName={u.name}
                status={u.status}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />)}
    </div>
));
