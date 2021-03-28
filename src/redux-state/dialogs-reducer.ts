import {v1} from "uuid";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
const DELETE_MESSAGE = "DELETE_MESSAGE"

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
export const newMessageId = v1()

export function dialogsReducer(state = initialState, action: DialogsActionsType) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageText: MessagesType = {
                id: newMessageId,
                message: action.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessageText],
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m => m.id !== action.messageId)
            }
        default:
            return state
    }
}

type DialogsActionsType =
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof deleteMessage>

export const addNewMessage = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage} as const)
export const deleteMessage = (messageId: string) => ({type: DELETE_MESSAGE, messageId} as const)
