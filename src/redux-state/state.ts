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
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType

}
const store: StoreType = {
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
            ]
        }
    },
}

let rerenderTree = () => {
    console.log("State changed")
}
export const addPost = (newPostMessage: string) =>{
    newPostMessage = store._state.profilePage.newPostText
    let newPost: PostsType = {
        id: v1(),
        postMessage: newPostMessage,
        likesCount: 0
    }
    store._state.profilePage.posts.push(newPost)
    store._state.profilePage.newPostText = ""
    rerenderTree()
}

export const onPostChange = (newText: string) =>{
    store._state.profilePage.newPostText = newText
    rerenderTree()
}

export const subscribe = (observer: any) => {
    rerenderTree = observer
}

export default store;