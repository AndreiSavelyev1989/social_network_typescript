import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toogleIsFetching,
    UserType
} from "../../redux-state/users-reducer";
import React from "react";
import {usersAPI} from "../api/api";

type UsersContainerPropsType = {
    users: Array<UserType>
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (page: number) => void
    portionSize: number
    toogleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    followingInProgress: Array<number>
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount(){
        this.props.toogleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then((response) => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(this.props.pageSize, pageNumber)
            .then((response) => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
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
     {setUsers, setTotalUsersCount, setCurrentPage, toogleIsFetching}
    )(UsersContainer)