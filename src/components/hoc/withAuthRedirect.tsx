import React from "react";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux-state/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    const withRedirect = (props: any) => {
        if (!props.isAuth) return <Redirect to="/login"/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(withRedirect)
}