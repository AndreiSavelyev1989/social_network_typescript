import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {addNewMessagetAC, updateNewMessageTextAC} from "./dialogs-reducer";

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

export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type RootStoreType = {
    subscribe: (observer: () => void) => void
    getState: () => StoreType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addNewMessagetAC> |
    ReturnType<typeof updateNewMessageTextAC>