
import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType} from "./redux-store-types";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), postMessage: "Hello World", likesCount: 20},
        {id: v1(), postMessage: "It is my first post", likesCount: 10}
    ],
    newPostText: 'it-incubator'
}

export function profileReducer(state = initialState, action: ActionsTypes){
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: v1(),
                postMessage: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText}) as const
