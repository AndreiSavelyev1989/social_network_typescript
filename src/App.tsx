import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStoreType} from "./redux-state/redux-store-types";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: RootStoreType
}

function App(props: AppPropsType) {
    let state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/profile'
                           render={() => <Profile
                               store={props.store}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.store}
                           />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
