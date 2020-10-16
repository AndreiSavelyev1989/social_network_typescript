import {v1} from "uuid";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

type DialogsActionsType =
    ReturnType<typeof addNewMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

const initialState: DialogsPageType = {
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

export function dialogsReducer(state = initialState, action: DialogsActionsType) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageText: MessagesType = {
                id: v1(),
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessageText],
                newMessageText: ""
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state
    }
}

export const addNewMessageAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage}) as const
export const updateNewMessageTextAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text}) as const