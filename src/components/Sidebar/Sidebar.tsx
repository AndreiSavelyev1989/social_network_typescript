import React from "react";
import {Friend} from "./Friend/Friend";
import {UserType} from "../../redux-state/users-reducer";

type SidebarPropsType = {
    users: Array<UserType>
}

export function Sidebar(props: SidebarPropsType) {
    return (
        <div>
            <h3>My Friends:</h3>
            {props.users.map(f => {
                    if (f.followed) {
                        return <Friend
                            key={f.id}
                            fullName={f.name}
                            photos={f.photos}
                        />
                    }
                }
            )}
        </div>
    )
}