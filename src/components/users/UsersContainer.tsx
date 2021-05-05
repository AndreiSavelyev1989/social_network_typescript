import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow, UserType} from "../../redux-state/users-reducer";
import React from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getPortionSize,
    getTotalUsersCount, getUserBackgroud,
    getUsers
} from "../../redux-state/selectors/users-selectors";

type UsersContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    portionSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    requestUsers: (pageSize: number, currentPage: number) => void
    userBackground: string
}

class UsersContainer extends React.PureComponent<UsersContainerPropsType, {}> {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(this.props.pageSize, pageNumber)
    }

    render() {

        return <Users
            users={this.props.users}
            userBackground={this.props.userBackground}
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

// const mapStateToProps = (state: StoreType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         portionSize: state.usersPage.portionSize,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }
const mapStateToProps = (state: StoreType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        portionSize: getPortionSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        userBackground: getUserBackgroud(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {follow, unfollow, requestUsers, setCurrentPage}),
        // withAuthRedirect
    )(UsersContainer)