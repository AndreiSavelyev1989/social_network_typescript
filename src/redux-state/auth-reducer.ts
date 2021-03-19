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
                ...action.payload,
                isAuth: true
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
        default:
            return state
    }
}

type ActionsAuthType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setAuthUserProfile>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>

//action-creators
export const setAuthUserDataAC = (id: number, email: string, login: string) => ({
    type: "SET_AUTH_USER_DATA",
    payload: {id, email, login}
} as const)
export const setAuthUserProfile = (profile: ProfileType) => ({type: "SET_AUTH_USER_PROFILE", profile} as const)
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: "SET_IS_LOGGED_IN", isLoggedIn} as const)
export const setError = (error: string) => ({type: "SET_ERROR", error} as const)

//thunk-creators
type ThunkAuthType = ThunkAction<void, StoreType, unknown, ActionsAuthType>

// export const authMe = (): ThunkAuthType => (dispatch) => {
//     return authAPI.authMe()
//         .then((res) => {
//             let {id, email, login} = res.data.data
//             if(res.data.resultCode === 0){
//                 dispatch(setAuthUserDataAC(id, email, login))
//             }
//         })
// }
export const authMe = (): ThunkAuthType => {
    return (dispatch) => {
        return authAPI.authMe()
            .then((res) => {
                let {id, email, login} = res.data.data
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(id, email, login))
                }
                return id
            })
            .then((id) => {
                profileAPI.getUserProfile(id)
                    .then((res) => {
                        if (id) {
                            dispatch(setAuthUserProfile(res.data))
                        }
                    })
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
            }
        })
        .catch(e => {
            dispatch(setError(e))
        })
}