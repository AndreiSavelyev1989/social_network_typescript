import {v1} from "uuid";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"


export type PostsType = {
    id: string
    postMessage: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type ActionsProfileTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), postMessage: "Hello World", likesCount: 20},
        {id: v1(), postMessage: "It is my first post", likesCount: 10}
    ],
    newPostText: 'it-incubator'
}

export function profileReducer(state = initialState, action: ActionsProfileTypes) {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText}) as const
