import {combineReducers, createStore} from "redux";
import {ProfilePageType, profileReducer} from "./profile-reducer";
import {DialogsPageType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer, SidebarType} from "./sidebar-reducer";
import {usersReducer, UsersType} from "./users-reducer";

export type StoreType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersType
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store = createStore(reducers)