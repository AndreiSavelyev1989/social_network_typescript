import React from "react";
import {User} from "./User/User";
import {UserType} from "../../redux-state/users-reducer";
import {v1} from "uuid";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    if(props.users.length === 0){
        props.setUsers([
            {
                id: v1(),
                userPhotoUrl: 'https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png',
                followed: true,
                fullName: "Andrei",
                status: "I'm a developer",
                location: {countryName: "Belarus", cityName: "Mogilev"}
            },
            {
                id: v1(),
                userPhotoUrl: '',
                followed: false,
                fullName: "Alex",
                status: "I'm a developer too",
                location: {countryName: "Belarus", cityName: "Minsk"}
            },
            {
                id: v1(),
                userPhotoUrl: '',
                followed: true,
                fullName: "Dimych",
                status: "I'm a developer too",
                location: {countryName: "Ukraine", cityName: "Kiev"}
            }
        ])
    }
    return (
        <div>
            {props.users.map(u => <User
                key={u.id}
                id={u.id}
                userPhotoUrl={u.userPhotoUrl}
                followed={u.followed}
                fullName={u.fullName}
                location={u.location}
                status={u.status}
                follow={props.follow}
                unfollow={props.unfollow}
            />)}
        </div>
    )
}