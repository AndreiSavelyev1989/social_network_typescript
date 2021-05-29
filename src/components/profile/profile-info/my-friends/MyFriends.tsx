import React, {useEffect} from "react";
import styles from "./MyFriends.module.scss";
import {Users} from "../../../users/Users";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../../redux-state/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow, UsersType} from "../../../../redux-state/users-reducer";

type PropsType = {
    isOwner: boolean
}

export const MyFriends: React.FC<PropsType> = React.memo(({isOwner}) => {

    const {
        users, currentPage, followingInProgress,
        isFetching, pageSize, totalUsersCount,
        portionSize, userBackground
    } = useSelector<StoreType, UsersType>(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(pageSize, currentPage, true))
    }, [])

    const onCurrentPage = (pageNumber: any) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(requestUsers(pageSize, pageNumber, true))
    }

    return (
        <div className={styles.aboutMyFriendContainer}>
            {isOwner ? <Users users={users}
                              pageSize={pageSize}
                              totalUsersCount={totalUsersCount}
                              currentPage={currentPage}
                              onCurrentPage={onCurrentPage}
                              portionSize={portionSize}
                              isFetching={isFetching}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}
                              userBackground={userBackground}/>
                :
                <span className={styles.notFriend}>You can't see other people's friends!!!</span>
            }
        </div>
    )
})