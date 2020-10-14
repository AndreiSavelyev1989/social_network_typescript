import React from "react";
import {addNewMessageAC, updateNewMessageTextAC} from "../../redux-state/dialogs-reducer";
import {StoreType} from "../../redux-state/redux-store-types";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


// export function DialogsContainer() {
//
//     const stateDialogsPage = props.store.getState().dialogsPage
//
//     const addNewMessage = () => {
//         props.store.dispatch(addNewMessageAC(stateDialogsPage.newMessageText))
//     }
//
//     const updateNewMessageText = (newText: string) => {
//         props.store.dispatch(updateNewMessageTextAC(newText))
//     }
//
//     return (
//         <Dialogs
//             dialogs={stateDialogsPage.dialogs}
//             messages={stateDialogsPage.messages}
//             newMessageText={stateDialogsPage.newMessageText}
//             addNewMessage={addNewMessage}
//             updateNewMessageText={updateNewMessageText}
//         />
//     )
// }

const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewMessage: (newMessageText: string) => {
            dispatch(addNewMessageAC(newMessageText))
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)