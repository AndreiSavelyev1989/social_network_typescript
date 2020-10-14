import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {addNewMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";

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
export type FriendsType = {
    id: string
    name: string
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
export type SidebarType = {
    friends: Array<FriendsType>
}

export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addNewMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>