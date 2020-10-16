import React from "react";
import {Friend} from "./Friend/Friend";
import {FriendsType} from "../../redux-state/sidebar-reducer";

type SidebarPropsType = {
    friends: Array<FriendsType>
}

export function Sidebar(props: SidebarPropsType) {
    return (
        <div>
            <h3>My Friends:</h3>
            {props.friends.map(f => <Friend key={f.id} name={f.name}/>)}
        </div>
    )
}