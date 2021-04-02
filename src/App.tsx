import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
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
import {PATH} from "./components/navbar/SidebarData";

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
                <div className="app_wrapper_content">
                    <Route path={`${PATH.PROFILE}/:userId?`}
                           render={withSuspense(ProfileContainer)}/>
                    <Route path={`${PATH.DIALOGS}`}
                           render={withSuspense(DialogsContainer)}/>
                    <Route path={`${PATH.USERS}`}
                           render={() => <UsersContainer/>}/>
                    <Route path={`${PATH.NEWS}`} render={() => <News/>}/>
                    <Route path={`${PATH.MUSIC}`} render={() => <Music/>}/>
                    <Route path={`${PATH.SETTINGS}`} render={() => <Settings/>}/>
                    <Route path={`${PATH.LOGIN}`} render={withSuspense(LoginContainer)}/>
                </div>
            </div>
        </BrowserRouter>
    );
});

export default App;
