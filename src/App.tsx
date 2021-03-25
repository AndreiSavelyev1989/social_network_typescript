import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {isInitializedTC} from "./redux-state/app-reducer";
import {StoreType} from "./redux-state/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {LoginContainer} from "./components/login/LoginContainer";

function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<StoreType, boolean>(state => state.app.isInitialized)
    useEffect(() => {
        dispatch(isInitializedTC())
    }, [])

    if(!isInitialized) {
        return <Preloader/>
    }
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
