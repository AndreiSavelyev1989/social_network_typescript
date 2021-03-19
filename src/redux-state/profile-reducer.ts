import {v1} from "uuid";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {profileAPI} from "../components/api/api";

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

type ProfileContactsType = {
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
    newPostText: string
    profile: ProfileType | null
    status: string
}


const initialState: ProfilePageType = {
    posts: [
        {id: v1(), postMessage: "Hello World", likesCount: 20},
        {id: v1(), postMessage: "It is my first post", likesCount: 10}
    ],
    newPostText: "it-incubator",
    profile: null,
    status: ""
}

export function profileReducer(state = initialState, action: ActionsProfileTypes) {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostsType = {
                id: v1(),
                postMessage: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                newPostText: action.newText
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
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setLikesCount>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

export const addPost = (newPostText: string) => ({type: "ADD_POST", newPostText} as const)
export const updateNewPostText = (newText: string) => ({type: "UPDATE_NEW_POST_TEXT", newText} as const)
export const setLikesCount = (id: string, likes: number) => ({type: "SET_LIKES_COUNT", id, likes} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setUserStatus = (status: string) => ({type: "SET_USER_STATUS", status} as const)


//thunk-creators
type ThunkProfileType = ThunkAction<void, StoreType, unknown, ActionsProfileTypes>

export const requestUserProfile = (userId: number): ThunkProfileType => (dispatch) => {
    return profileAPI.getUserProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        })
}

export const requestUserStatus = (userId: number): ThunkProfileType => (dispatch) => {
    return profileAPI.getUserStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}
export const changeUserStatus = (status: string): ThunkProfileType => (dispatch) => {
    return profileAPI.updateUserStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}