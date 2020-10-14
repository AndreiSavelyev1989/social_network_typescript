import React from "react";
import {FriendsType} from "../../redux-state/redux-store-types";
import {Friend} from "./Friend/Friend";

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