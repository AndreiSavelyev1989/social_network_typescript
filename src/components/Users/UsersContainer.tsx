import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {
    follow, setCurrentPage,
    setTotalUsersCount,
    setUsers, toogleIsFetching,
    unfollow,
    UserType
} from "../../redux-state/users-reducer";
import React from "react";
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
    toogleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {

    componentDidMount(): void {
        this.props.toogleIsFetching(true)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: { data: { items: UserType[]; totalCount: number; }; }) => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPage = (pageNumber: any) => {
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((response: { data: { items: UserType[] }; }) => {
                this.props.toogleIsFetching(false)
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
            isFetching={this.props.isFetching}
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
    }
}

// const mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         toogleIsFetching: (isFetching: boolean) => {
//           dispatch(toogleIsFetchingAC(isFetching))
//         },
//     }
// }


export default connect(mapStateToProps,
     {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toogleIsFetching}
    )(UsersContainer)