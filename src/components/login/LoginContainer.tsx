import {Login} from "./Login";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {AuthUserType} from "../../redux-state/auth-reducer";

const LoginContainer = React.memo(() => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector<StoreType, AuthUserType>(state => state.auth);

    return (
        <Login dispatch={dispatch} isAuth={isAuth}/>
    )
})

export default LoginContainer;