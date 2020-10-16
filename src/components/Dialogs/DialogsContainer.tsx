import {addNewMessageAC, updateNewMessageTextAC} from "../../redux-state/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";

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