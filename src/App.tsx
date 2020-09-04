import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux-state/state"

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route  path = '/profile'
                            render = {() => <Profile
                                posts={props.state.profilePage.posts}/>}/>
                    <Route  path = '/dialogs'
                            render = {() => <Dialogs
                                dialogs = {props.state.dialogsPage.dialogs}
                                messages = {props.state.dialogsPage.messages}/>}/>
                    <Route  path = '/news' render = {News}/>
                    <Route  path = '/music' render = {Music}/>
                    <Route  path = '/settings' render = {Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
