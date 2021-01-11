import {addNewMessage, updateNewMessageText} from "../../redux-state/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";

const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}


export const DialogsContainer = connect(mapStateToProps, {
    addNewMessage, updateNewMessageText
})(Dialogs)