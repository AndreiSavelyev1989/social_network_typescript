import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";
import {StoreType} from "../../redux-state/redux-store";


const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {}
}

export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)