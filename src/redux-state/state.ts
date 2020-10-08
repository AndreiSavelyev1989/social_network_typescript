import {v1} from "uuid";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addNewMessagetAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    postMessage: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _subscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addNewMessagetAC> |
    ReturnType<typeof updateNewMessageTextAC>

export const store: StoreType = {
    _subscriber() {
        console.log("State changed")
    },
    _state: {
        profilePage: {
            posts: [
                {id: v1(), postMessage: "Hello World", likesCount: 20},
                {id: v1(), postMessage: "It is my first post", likesCount: 10}
            ],
            newPostText: 'it-incubator'
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Andrei"},
                {id: v1(), name: "Pavel"},
                {id: v1(), name: "Viktor"},
                {id: v1(), name: "Dima"},
                {id: v1(), name: "Sveta"}
            ],
            messages: [
                {id: v1(), message: "Hello people!"},
                {id: v1(), message: "Welcome!"},
                {id: v1(), message: "How are you?"},
                {id: v1(), message: "Nice to meet you!"},
                {id: v1(), message: "What a wonderful day!"}
            ],
            newMessageText: "Hello!!!"
        }
    },

    subscribe(observer) {
        this._subscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._subscriber()
    }
}
