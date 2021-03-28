import React from "react";
import {Friend} from "./friend/Friend";
import {UserType} from "../../redux-state/users-reducer";

type SidebarPropsType = {
    users: Array<UserType>
}

export const Sidebar = React.memo((props: SidebarPropsType) => (
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
));