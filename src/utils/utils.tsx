import {Dispatch} from "redux";
import {UsersType} from "../redux-state/users-reducer";
import {ProfilePageType} from "../redux-state/profile-reducer";

export const followUnfollowFlow = async (dispatch: Dispatch, toogleFollowingProgress: any, followedAPI: any, userId: number, followed: any) => {
    dispatch(toogleFollowingProgress(true, userId))
    let res = await followedAPI(userId)
    if (res.data.resultCode === 0) {
        dispatch(followed(userId))
        dispatch(toogleFollowingProgress(false, userId))
    }
}

export const followUnfollowCase = (state: UsersType, userId: number, followed: boolean) => {
    return state.users.map(u => {
        if (u.id === userId) {
            return {...u, followed: followed}
        }
        return u
    })
}
