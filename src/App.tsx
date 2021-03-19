import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {isInitializedTC} from "./redux-state/app-reducer";
import {StoreType} from "./redux-state/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

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
                    <Route path="/login" render={() => <Login/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
