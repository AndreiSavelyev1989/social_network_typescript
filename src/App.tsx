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
import {addPost, onPostChange, StoreType} from "./redux-state/state"

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/profile'
                           render={() => <Profile
                               posts={props.store._state.profilePage.posts}
                               addPost={addPost}
                               onPostChange={onPostChange}
                               newPostText={props.store._state.profilePage.newPostText}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.store._state.dialogsPage.dialogs}
                               messages={props.store._state.dialogsPage.messages}/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
