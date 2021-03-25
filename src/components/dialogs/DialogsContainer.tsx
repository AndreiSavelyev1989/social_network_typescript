import {addNewMessage} from "../../redux-state/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state: StoreType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { addNewMessage }),
    withAuthRedirect
)(Dialogs)