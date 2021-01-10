import {usersAPI} from "../components/api/api";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";

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
}

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsUsersType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state, users: action.users
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
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

export const followSuccess = (userId: number) => ({type: "FOLLOW", userId} as const)
export const unfollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)
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

export const requestUsers = (pageSize: number, currentPage: number): ThunkUsersType => (dispatch) => {
    dispatch(toogleIsFetching(true))
    return usersAPI.getUsers(pageSize, currentPage)
        .then(response=> {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
}

export const follow = (userId: number): ThunkUsersType => (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId))
    return usersAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toogleFollowingProgress(false, userId))
        })
}

export const unfollow = (userId: number): ThunkUsersType => (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId))
    return usersAPI.unfollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toogleFollowingProgress(false, userId))
        })
}