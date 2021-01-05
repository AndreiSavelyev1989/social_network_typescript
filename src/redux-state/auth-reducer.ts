import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../components/api/api";
import {setUserProfile} from "./profile-reducer";

export type AuthUserType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export function authReducer(state = initialState, action: ActionsType) {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setUserProfile>

//action-creators
export const setAuthUserDataAC = (id: number, email: string, login: string) => ({ type: "SET_AUTH_USER_DATA", payload: {id, email, login}} as const)

type ThunkDispatch = Dispatch<ActionsType>
//thunk-creators
export const setAuthUserDataTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.authMe()
            .then((res) => {
                let {id, email, login} = res.data.data
                dispatch(setAuthUserDataAC(id, email, login))
                return id
            })
            .then((id) => {
               profileAPI.getUserProfile(id)
                    .then((res) => {
                        dispatch(setUserProfile(res.data))
                    })
            })
    }
}
