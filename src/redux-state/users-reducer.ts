import {usersAPI} from "../components/api/api";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {followUnfollowCase, followUnfollowFlow, randomBackground} from "../utils/utils";
import userBackground_1 from "./../images/user-backgrounds/userBackground_1.jpg"
import userBackground_2 from "./../images/user-backgrounds/userBackground_2.jpg"
import userBackground_3 from "./../images/user-backgrounds/userBackground_3.jpg"
import userBackground_4 from "./../images/user-backgrounds/userBackground_4.jpg"
import userBackground_5 from "./../images/user-backgrounds/userBackground_5.jpg"
import userBackground_6 from "./../images/user-backgrounds/userBackground_6.jpg"
import userBackground_7 from "./../images/user-backgrounds/userBackground_7.jpg"
import userBackground_8 from "./../images/user-backgrounds/userBackground_8.jpg"
import userBackground_9 from "./../images/user-backgrounds/userBackground_9.jpg"
import userBackground_10 from "./../images/user-backgrounds/userBackground_10.jpg"

export type UserType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    portionSize: number
    isFetching: boolean
    followingInProgress: Array<number>
    userBackground: string
}

const initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [],
    userBackground: ""
}

const userBackgrounds = [userBackground_1, userBackground_2, userBackground_3, userBackground_4, userBackground_5, userBackground_6, userBackground_7, userBackground_8, userBackground_9, userBackground_10]

export const usersReducer = (state = initialState, action: ActionsUsersType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: followUnfollowCase(state, action.userId, true)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: followUnfollowCase(state, action.userId, false)
            }
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "SET_USER_BACKGROUND":
            return {
                ...state,
                userBackground: action.background
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.page
            }
        case "TOOGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOOGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//action-creators
export type ActionsUsersType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof toogleFollowingProgress>
    | ReturnType<typeof setUserBackground>

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)
export const setUserBackground = (background: string) => ({type: "SET_USER_BACKGROUND", background} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
} as const)
export const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", page} as const)
export const toogleIsFetching = (isFetching: boolean) => ({type: "TOOGLE_IS_FETCHING", isFetching} as const)
export const toogleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: "TOOGLE_FOLLOWING_PROGRESS",
    isFetching, userId
} as const)


//thunk-creators
type ThunkUsersType = ThunkAction<void, StoreType, unknown, ActionsUsersType>

export const requestUsers = (pageSize: number, currentPage: number): ThunkUsersType => async (dispatch) => {
    dispatch(toogleIsFetching(true))
    let res = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(toogleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setUserBackground(randomBackground(userBackgrounds)))
    dispatch(setTotalUsersCount(res.data.totalCount))
}

export const follow = (userId: number): ThunkUsersType => async (dispatch) => {
    return followUnfollowFlow(dispatch, toogleFollowingProgress, usersAPI.follow, userId, followSuccess)
}

export const unfollow = (userId: number): ThunkUsersType => async (dispatch) => {
    return followUnfollowFlow(dispatch, toogleFollowingProgress, usersAPI.unfollow, userId, unfollowSuccess)
}