import {v1} from "uuid";

export type FriendsType = {
    id: string
    name: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

const initialState: SidebarType = {
    friends: [
        {id: v1(), name: "Andrei"},
        {id: v1(), name: "Pavel"},
        {id: v1(), name: "Viktor"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Sveta"}
        ]
}

export const sidebarReducer = (state = initialState, action: any) => {
    return state
}

