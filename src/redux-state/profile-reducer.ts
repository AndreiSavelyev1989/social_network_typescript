import {v1} from "uuid";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {profileAPI, UserPhotosType} from "../components/api/api";
import {authMe, setError} from "./auth-reducer";
import postBackground_1 from "../images/post-backgrounds/postBackground_1.jpg";
import postBackground_2 from "../images/post-backgrounds/postBackground_2.jpg";
import postBackground_3 from "../images/post-backgrounds/postBackground_3.jpg";
import postBackground_4 from "../images/post-backgrounds/postBackground_4.jpg";
import postBackground_5 from "../images/post-backgrounds/postBackground_5.jpg";
import {randomBackground} from "../utils/utils";

export type PostType = {
    id: string
    postMessage: string
    likesCount: number
    dislikesCount: number
    postBackground: string
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
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    profileEditMode: boolean
}

const postBackgrounds = [postBackground_1, postBackground_2, postBackground_3, postBackground_4, postBackground_5]

const initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            postMessage: "Hello World",
            likesCount: 20,
            dislikesCount: 0,
            postBackground: randomBackground(postBackgrounds)
        },
        {
            id: v1(),
            postMessage: "It is my first post",
            likesCount: 10,
            dislikesCount: 0,
            postBackground: randomBackground(postBackgrounds)
        }
    ],
    profile: null,
    status: "",
    profileEditMode: false
}

export const newPostId = v1()

export function profileReducer(state = initialState, action: ActionsProfileTypes) {
    switch (action.type) {
        case "ADD_POST":
            let newPost: PostType = {
                id: newPostId,
                postMessage: action.newPostText,
                likesCount: 0,
                dislikesCount: 0,
                postBackground: randomBackground(postBackgrounds)
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
                posts: state.posts.map(p => p.id === action.id ? {...p, likesCount: action.like} : p)
            }
        case "SET_DISLIKES_COUNT":
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.id ? {...p, dislikesCount: action.dislike} : p)
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
        case "SET_USER_PHOTO":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case "SET_PROFILE_EDIT_MODE":
            return {
                ...state,
                profileEditMode: action.editMode
            }
        default:
            return state
    }
}

//action-creators
export type ActionsProfileTypes =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setLikesCount>
    | ReturnType<typeof setDislikesCount>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof setError>
    | ReturnType<typeof setUserPhoto>
    | ReturnType<typeof setUserProfileEditMode>

export const addPost = (newPostText: string) => ({type: "ADD_POST", newPostText} as const)
export const deletePost = (postId: string) => ({type: "DELETE_POST", postId} as const)
export const setLikesCount = (id: string, like: number) => ({type: "SET_LIKES_COUNT", id, like} as const)
export const setDislikesCount = (id: string, dislike: number) => ({type: "SET_DISLIKES_COUNT", id, dislike} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setUserStatus = (status: string) => ({type: "SET_USER_STATUS", status} as const)
export const setUserPhoto = (photos: UserPhotosType) => ({type: "SET_USER_PHOTO", photos} as const)
export const setUserProfileEditMode = (editMode: boolean) => ({type: "SET_PROFILE_EDIT_MODE", editMode} as const)


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

export const changeUserProfile = (profile: ProfileType): ThunkProfileType => async (dispatch, getState) => {
    const userId = getState().auth.id
    try {
        const res = await profileAPI.updateUserProfile(profile)
        if (res.data.resultCode === 0) {
            if (userId) {
                dispatch(setUserProfileEditMode(false))
                dispatch(requestUserProfile(userId))
            }
        } else {
            dispatch(setError(res.data.messages[0]))
            dispatch(setUserProfileEditMode(true))
            // return Promise.reject(res.data.messages[0])
        }
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

export const changeUserPhoto = (file: File): ThunkProfileType => async (dispatch) => {
    try {
        const res = await profileAPI.saveProfilePhoto(file)
        if (res.data.resultCode === 0) {
            dispatch(setUserPhoto(res.data.data.photos))
            dispatch(authMe())
        }
    } catch (e) {
        dispatch(setError(e.message))
    }
}