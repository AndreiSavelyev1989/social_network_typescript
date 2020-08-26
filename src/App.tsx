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


const dialogs = [
    {id: 1, name: "Andrei", message: "Hello people!"},
    {id: 2, name: "Pavel", message: "Welcome!"},
    {id: 3, name: "Viktor", message: "How are you?"},
    {id: 4, name: "Dima", message: "Nice to meet you!"},
    {id: 5, name: "Sveta", message: "What a wonderful day!"}
]

function App() {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route  path = '/profile' render = {() => <Profile />}/>
                    <Route  path = '/dialogs' render = {() => <Dialogs dialogs = {dialogs}/>}/>
                    <Route  path = '/news' render = {News}/>
                    <Route  path = '/music' render = {Music}/>
                    <Route  path = '/settings' render = {Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
