import {Login} from "./Login";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {AuthUserType} from "../../redux-state/auth-reducer";

export const LoginContainer = () => {
    const dispatch = useDispatch()
    const {error, isLoggedIn} = useSelector<StoreType, AuthUserType>(state => state.auth);

    return (
        <Login dispatch={dispatch} error={error} isLoggedIn={isLoggedIn}/>
    )
}