import {v1} from "uuid";
import {ActionsTypes, DialogsPageType, MessagesType} from "./redux-store-types";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

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

export function dialogsReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessageText: MessagesType = {
                id: v1(),
                message: state.newMessageText,
            }
            let copyState = {...state}
            copyState.messages = [...state.messages]
            copyState.messages.push(newMessageText)
            copyState.newMessageText = ""
            return copyState
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newMessageText = action.text
            return copyState
        }
        default:
            return state
    }
}

export const addNewMessageAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage}) as const
export const updateNewMessageTextAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text}) as const