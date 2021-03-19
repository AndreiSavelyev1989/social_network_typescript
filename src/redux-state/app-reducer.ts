import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {authMe} from "./auth-reducer";


type  AppInitialType = {
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

export const isInitializedTC = (): ThunkAppType => (dispatch) => {
    const promise = dispatch(authMe())
    // @ts-ignore
    promise.then(() => {
        dispatch(setIsInitialized(true))
    })
}
