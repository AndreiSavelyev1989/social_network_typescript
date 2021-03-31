import {Dispatch} from "redux";

export const followUnfollowFlow = async (dispatch: Dispatch, toogleFollowingProgress: any, followedAPI: any, userId: number, followed: any) => {
    dispatch(toogleFollowingProgress(true, userId))
    let res = await followedAPI(userId)
    if (res.data.resultCode === 0) {
        dispatch(followed(userId))
        dispatch(toogleFollowingProgress(false, userId))
    }
}