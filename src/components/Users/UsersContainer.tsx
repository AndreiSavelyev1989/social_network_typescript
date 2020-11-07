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
import React, {Dispatch} from "react";
import * as axios from "axios";

type UsersContainerPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (page: number) => void
    portionSize: number
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount(): void {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: { data: { items: UserType[]; totalCount: number; }; }) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((response: { data: { items: UserType[] }; }) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onCurrentPage={this.onCurrentPage}
            portionSize={this.props.portionSize}
        />
    }
}
const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        portionSize: state.usersPage.portionSize,
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)