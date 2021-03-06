import {authAPI, profileAPI, securityAPI} from "../components/api/api";
import {ProfileType, setUserProfile} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";

export type AuthUserType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    error: string
    isLoggedIn: boolean
    authProfile: ProfileType | null
    captcha: string
}

const initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: '',
    isLoggedIn: false,
    authProfile: null,
    captcha: ''
}

export function authReducer(state = initialState, action: ActionsAuthType) {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload
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
        case "SET_AUTH_USER_PROFILE":
            return {
                ...state,
                authProfile: action.profile
            }
        case "SET_CAPTCHA":
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
}

export type ActionsAuthType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setAuthUserProfile>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof setCaptcha>

//action-creators
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: "SET_AUTH_USER_DATA",
    payload: {id, email, login}
} as const)
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: "SET_IS_LOGGED_IN", isLoggedIn} as const)
export const setError = (error: string) => ({type: "SET_ERROR", error} as const)
export const setIsAuth = (isAuth: boolean) => ({type: "SET_IS_AUTH", isAuth} as const)
export const setAuthUserProfile = (profile: ProfileType) => ({type: "SET_AUTH_USER_PROFILE", profile} as const)
export const setCaptcha = (captcha: string) => ({type: "SET_CAPTCHA", captcha} as const)

//thunk-creators
type ThunkAuthType = ThunkAction<void, StoreType, unknown, ActionsAuthType>

export const authMe = (): ThunkAuthType => {
    return (dispatch) => {
        return authAPI.authMe()
            .then((res) => {
                let {id, email, login} = res.data.data
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login))
                    dispatch(setIsAuth(true))
                    dispatch(setIsLoggedIn(true))
                }
                return id
            })
            .then((id) => {
                dispatch(requestUserProfile(id))
            })
    }
}

export const requestUserProfile = (id: number): ThunkAuthType => (dispatch) => {
    return profileAPI.getUserProfile(id)
        .then((res) => {
            if (id) {
                dispatch(setAuthUserProfile(res.data))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: string): ThunkAuthType => async (dispatch) => {
    try {
        const res = await authAPI.login(email, password, rememberMe, captcha)
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn(true))
        } else {
            if (res.data.fieldsErrors.length > 0) {
                dispatch(captchaTC())
            }
            dispatch(setError(res.data.messages[0]))
        }
    } catch (e) {
        dispatch(setError(e.message))
    }
}

export const logoutTC = (): ThunkAuthType => async (dispatch) => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedIn(false))
            dispatch(setIsAuth(false))
            dispatch(setError(''))
            dispatch(setCaptcha(''))
        } else {
            dispatch(setError(res.data.messages[0]))
        }
    } catch (e) {
        dispatch(setError(e.message))
    }
}

export const captchaTC = (): ThunkAuthType => async (dispatch) => {
    try {
        const res = await securityAPI.captcha()
        dispatch(setCaptcha(res.data.url))
    } catch (e) {
        dispatch(setError(e.message))
    }
}