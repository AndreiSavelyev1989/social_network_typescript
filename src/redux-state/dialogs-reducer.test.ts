import {addNewMessage, deleteMessage, DialogsPageType, dialogsReducer, newMessageId} from "./dialogs-reducer";

let startState: DialogsPageType = {
    dialogs: [
        {id: "1", name: "Andrei"},
        {id: "2", name: "Pavel"},
        {id: "3", name: "Viktor"},
        {id: "4", name: "Dima"},
        {id: "5", name: "Sveta"}
    ],
    messages: [
        {id: "1", message: "Hello people!"},
        {id: "2", message: "Welcome!"},
        {id: "3", message: "How are you?"},
        {id: "4", message: "Nice to meet you!"},
        {id: "5", message: "What a wonderful day!"}
    ],
}

beforeEach(() => {
    startState = {
        dialogs: [
            {id: "1", name: "Andrei"},
            {id: "2", name: "Pavel"},
            {id: "3", name: "Viktor"},
            {id: "4", name: "Dima"},
            {id: "5", name: "Sveta"}
        ],
        messages: [
            {id: "1", message: "Hello people!"},
            {id: "2", message: "Welcome!"},
            {id: "3", message: "How are you?"},
            {id: "4", message: "Nice to meet you!"},
            {id: "5", message: "What a wonderful day!"}
        ],
    };
})

test('new message should be added into messages', () => {

    const action = addNewMessage("IT-INCUBATOR");

    const endState = dialogsReducer(startState, action)

    expect(endState).toEqual({
        dialogs: [
            {id: "1", name: "Andrei"},
            {id: "2", name: "Pavel"},
            {id: "3", name: "Viktor"},
            {id: "4", name: "Dima"},
            {id: "5", name: "Sveta"}
        ],
        messages: [
            {id: "1", message: "Hello people!"},
            {id: "2", message: "Welcome!"},
            {id: "3", message: "How are you?"},
            {id: "4", message: "Nice to meet you!"},
            {id: "5", message: "What a wonderful day!"},
            {id: newMessageId, message: "IT-INCUBATOR"}
        ],
        }
    )
});

test('selected message should be deleted from messages', () => {

    const action = deleteMessage("5");

    const endState = dialogsReducer(startState, action)

    expect(endState).toEqual({
        dialogs: [
            {id: "1", name: "Andrei"},
            {id: "2", name: "Pavel"},
            {id: "3", name: "Viktor"},
            {id: "4", name: "Dima"},
            {id: "5", name: "Sveta"}
        ],
        messages: [
            {id: "1", message: "Hello people!"},
            {id: "2", message: "Welcome!"},
            {id: "3", message: "How are you?"},
            {id: "4", message: "Nice to meet you!"},
        ],
        }
    )
});

