import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import {useDispatch, useSelector} from "react-redux";
import {isInitializedTC} from "./redux-state/app-reducer";
import {StoreType} from "./redux-state/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./components/hoc/withSuspense";

const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const LoginContainer = React.lazy(() => import("./components/login/LoginContainer"));


const App = React.memo(() => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<StoreType, boolean>(state => state.app.isInitialized)
    useEffect(() => {
        dispatch(isInitializedTC())
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={withSuspense(LoginContainer)}/>
                </div>
            </div>
        </BrowserRouter>
    );
});

export default App;
