import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {authMe, requestUserProfile} from "./auth-reducer";


export type  AppInitialType = {
    isInitialized: boolean
}
const initialState: AppInitialType = {
    isInitialized: false
}

export const appReducer = (state = initialState, action: ActionsAppType) => {
    switch (action.type) {
        case "IS_INITIALIZED":
            return {
                ...state,
                isInitialized: action.value
            }
        default:
            return state
    }
}

type ActionsAppType = ReturnType<typeof setIsInitialized>

export const setIsInitialized = (value: boolean) => ({type: "IS_INITIALIZED", value} as const)

type ThunkAppType = ThunkAction<void, StoreType, unknown, ActionsAppType>

export const isInitializedTC = (): ThunkAppType => async (dispatch) => {
    await Promise.all([dispatch(authMe())])
    dispatch(setIsInitialized(true))
}
