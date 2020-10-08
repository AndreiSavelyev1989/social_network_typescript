import {ActionsTypes, DialogsPageType, MessagesType} from "./state";
import {v1} from "uuid";

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

export function dialogsReducer(state: DialogsPageType, action: ActionsTypes) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessageText: MessagesType = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messages.push(newMessageText)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const addNewMessagetAC = (newMessage: string) => ({type: ADD_NEW_MESSAGE, newMessage}) as const
export const updateNewMessageTextAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text}) as const