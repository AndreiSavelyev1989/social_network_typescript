import {authAPI, profileAPI} from "../components/api/api";
import {ProfileType} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";

export type AuthUserType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    profile: ProfileType | null
    error: string
    isLoggedIn: boolean
}

const initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    error: '',
    isLoggedIn: false
}

export function authReducer(state = initialState, action: ActionsAuthType) {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
        case "SET_AUTH_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_IS_LOGGED_IN":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.error
            }
        case "SET_IS_AUTH":
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export type ActionsAuthType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setAuthUserProfile>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsAuth>

//action-creators
export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: "SET_AUTH_USER_DATA",
    payload: {id, email, login}
} as const)
export const setAuthUserProfile = (profile: ProfileType) => ({type: "SET_AUTH_USER_PROFILE", profile} as const)
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: "SET_IS_LOGGED_IN", isLoggedIn} as const)
export const setError = (error: string) => ({type: "SET_ERROR", error} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "SET_IS_AUTH", isAuth} as const)

//thunk-creators
type ThunkAuthType = ThunkAction<void, StoreType, unknown, ActionsAuthType>

export const authMe = (): ThunkAuthType => {
    return (dispatch, getState) => {
        const isAuth = getState().auth.isAuth
        const isLoggedIn = getState().auth.isLoggedIn
        return authAPI.authMe()
            .then((res) => {
                let {id, email, login} = res.data.data
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(id, email, login))
                    dispatch(setIsAuth(true))
                    dispatch(setIsLoggedIn(true))
                }
                return id
            })
            .then((id) => {
                if (isAuth || isLoggedIn) {
                    profileAPI.getUserProfile(id)
                        .then((res) => {
                            if (id) {
                                dispatch(setAuthUserProfile(res.data))
                            }
                        })
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAuthType => (dispatch) => {
    return authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedIn(true))
            }
        })
        .catch(e => {
            dispatch(setError(e))
        })
}
export const logoutTC = (): ThunkAuthType => (dispatch) => {
    return authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedIn(false))
                dispatch(setIsAuth(false))
            }
        })
        .catch(e => {
            dispatch(setError(e))
        })
}