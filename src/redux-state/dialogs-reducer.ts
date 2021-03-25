import {v1} from "uuid";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"

type DialogsActionsType =
    ReturnType<typeof addNewMessage>

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
}

export function dialogsReducer(state = initialState, action: DialogsActionsType) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageText: MessagesType = {
                id: v1(),
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessageText],
            }
        default:
            return state
    }
}

export const addNewMessage = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage}) as const
