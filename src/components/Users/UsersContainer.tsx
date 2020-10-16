import {connect} from "react-redux";
import {Users} from "./Users";
import {StoreType} from "../../redux-state/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux-state/users-reducer";

const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)