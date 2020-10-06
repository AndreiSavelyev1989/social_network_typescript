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
import {StoreType} from "./redux-state/state"

type AppPropsType = {
    store: StoreType
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
                               posts={state.profilePage.posts}
                               dispatch={props.store.dispatch.bind(props.store)}
                               newPostText={state.profilePage.newPostText}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}
                               dispatch={props.store.dispatch.bind(props.store)}
                               newMessageText={state.dialogsPage.newMessageText}
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
