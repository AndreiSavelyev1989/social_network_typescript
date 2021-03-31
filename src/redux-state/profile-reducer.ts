import {v1} from "uuid";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {profileAPI} from "../components/api/api";
import {setError} from "./auth-reducer";

export type PostsType = {
    id: string
    postMessage: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}

export type ProfilePhotosType = {
    small: string
    large: string
}

export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
}


const initialState: ProfilePageType = {
    posts: [
        {id: v1(), postMessage: "Hello World", likesCount: 20},
        {id: v1(), postMessage: "It is my first post", likesCount: 10}
    ],
    profile: null,
    status: ""
}

export const newPostId = v1()

export function profileReducer(state = initialState, action: ActionsProfileTypes) {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostsType = {
                id: newPostId,
                postMessage: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case "SET_LIKES_COUNT":
            return {
                ...state,
                posts: state.posts.map(p => {
                        if (p.id === action.id) {
                            return {...p, likesCount: action.likes}
                        } else {
                            return p
                        }
                    }
                )
            }
        case "SET_USER_PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET_USER_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//action-creators
export type ActionsProfileTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setLikesCount>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setError>

export const addPost = (newPostText: string) => ({type: "ADD_POST", newPostText} as const)
export const deletePost = (postId: string) => ({type: "DELETE_POST", postId} as const)
export const setLikesCount = (id: string, likes: number) => ({type: "SET_LIKES_COUNT", id, likes} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setUserStatus = (status: string) => ({type: "SET_USER_STATUS", status} as const)


//thunk-creators
type ThunkProfileType = ThunkAction<void, StoreType, unknown, ActionsProfileTypes>

export const requestUserProfile = (userId: number): ThunkProfileType => async (dispatch) => {
    try {
        const res = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(res.data))
    } catch (e) {
        dispatch(setError(e.message))
    }
}

export const requestUserStatus = (userId: number): ThunkProfileType => async (dispatch) => {
    try {
        const res = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(res.data))
    } catch (e) {
        dispatch(setError(e.message))
    }

}
export const changeUserStatus = (status: string): ThunkProfileType => async (dispatch) => {
    try {
        const res = await profileAPI.updateUserStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (e) {
        dispatch(setError(e.message))
    }
}