import React from "react";
import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";
import {StoreType} from "../../redux-state/redux-store-types";

const mapStateToProps = (state: StoreType) => {
    return {
        friends: state.sidebar.friends
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {}
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)