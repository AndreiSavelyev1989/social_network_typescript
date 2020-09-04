import {v1} from "uuid";

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
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), postMessage: "Hello World", likesCount: 20},
            {id: v1(), postMessage: "It is my first post", likesCount: 10}
        ]
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
        ]
    }
}

export default state;