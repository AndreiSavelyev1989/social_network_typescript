import {addNewMessage, updateNewMessageText} from "../../redux-state/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageText:state.dialogsPage.newMessageText,
    }
}

const withRedirect = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, {
    addNewMessage, updateNewMessageText
})(withRedirect)
