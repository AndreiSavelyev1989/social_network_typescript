import {v1} from "uuid";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"


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

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const addNewMessagetAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage}) as const
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText}) as const
export const updateNewMessageTextAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text}) as const

const store: StoreType = {
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
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: v1(),
                postMessage: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._subscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._subscriber()
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessageText: MessagesType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessageText)
            this._state.dialogsPage.newMessageText = ""
            this._subscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._subscriber()
        }
    }
}

export default store;