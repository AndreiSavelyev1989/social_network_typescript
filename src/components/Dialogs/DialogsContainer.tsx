import React from "react";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux-state/dialogs-reducer";
import {RootStoreType} from "../../redux-state/redux-store-types";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: RootStoreType
}

export function DialogsContainer(props: DialogsPropsType) {

    const stateDialogsPage = props.store.getState().dialogsPage

    const addNewMessage = () => {
        props.store.dispatch(addNewMessageAC(stateDialogsPage.newMessageText))
    }

    const updateNewMessageText = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }

    return (
        <Dialogs
            dialogs={stateDialogsPage.dialogs}
            messages={stateDialogsPage.messages}
            newMessageText={stateDialogsPage.newMessageText}
            addNewMessage={addNewMessage}
            updateNewMessageText={updateNewMessageText}
        />
    )
}