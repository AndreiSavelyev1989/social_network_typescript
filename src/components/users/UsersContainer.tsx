import {useDispatch, useSelector} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {follow, requestUsers, setCurrentPage, unfollow, UsersType} from "../../redux-state/users-reducer";
import React, {useEffect} from "react";

// export type UsersContainerPropsType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     setCurrentPage: (page: number) => void
//     portionSize: number
//     isFetching: boolean
//     followingInProgress: Array<number>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     requestUsers: (pageSize: number, currentPage: number, isFriend: boolean) => void
//     userBackground: string
// }

// class UsersContainer extends React.PureComponent<UsersContainerPropsType, {}> {
//
//     componentDidMount() {
//         this.props.requestUsers(this.props.pageSize, this.props.currentPage, false)
//     }
//
//     onCurrentPage = (pageNumber: any) => {
//         this.props.setCurrentPage(pageNumber)
//         this.props.requestUsers(this.props.pageSize, pageNumber, false)
//     }
//
//     render() {
//
//         return <Users
//             users={this.props.users}
//             userBackground={this.props.userBackground}
//             pageSize={this.props.pageSize}
//             totalUsersCount={this.props.totalUsersCount}
//             currentPage={this.props.currentPage}
//             onCurrentPage={this.onCurrentPage}
//             portionSize={this.props.portionSize}
//             isFetching={this.props.isFetching}
//             followingInProgress={this.props.followingInProgress}
//             follow={this.props.follow}
//             unfollow={this.props.unfollow}
//         />
//     }
// }
//
// const mapStateToProps = (state: StoreType) => {
//     return {
//         users: getUsers(state),
//         pageSize: getPageSize(state),
//         totalUsersCount: getTotalUsersCount(state),
//         currentPage: getCurrentPage(state),
//         portionSize: getPortionSize(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//         userBackground: getUserBackground(state)
//     }
// }
//
// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {follow, unfollow, requestUsers, setCurrentPage}),
//         // withAuthRedirect
//     )(UsersContainer)

export const UsersContainer = React.memo(() => {
    const {
        users, currentPage, followingInProgress,
        isFetching, pageSize, totalUsersCount,
        portionSize, userBackground
    } = useSelector<StoreType, UsersType>(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(pageSize, currentPage))
    }, [])

    const onCurrentPage = (pageNumber: any) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(requestUsers(pageSize, pageNumber))
    }
    return <Users
        users={users}
        userBackground={userBackground}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        onCurrentPage={onCurrentPage}
        portionSize={portionSize}
        isFetching={isFetching}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
    />
})