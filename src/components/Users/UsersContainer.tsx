import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {
    followAC, setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersActionsType,
    UserType
} from "../../redux-state/users-reducer";
import {Dispatch} from "react";

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)