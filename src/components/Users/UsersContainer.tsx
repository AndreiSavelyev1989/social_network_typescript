import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow, UserType} from "../../redux-state/users-reducer";
import React from "react";

type UsersContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    portionSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userId: number) => Promise<void>
    unfollow: (userId: number) => Promise<void>
    requestUsers: (pageSize: number, currentPage: number) => Promise<void>
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount(){
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onCurrentPage={this.onCurrentPage}
            portionSize={this.props.portionSize}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps,
     {follow, unfollow, requestUsers, setCurrentPage}
    )(UsersContainer)