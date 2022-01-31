import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";
import {actionType, dialogsPageType, navbarPagesType, profilePageType} from "./Redux/state";

type propsType={
    state:stateType
    dispatch:(action:actionType)=>void
}

type stateType={
    profilePage:profilePageType
    dialogsPage:dialogsPageType
    navbarPages: navbarPagesType
}

function App(props:propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar navbar={props.state.navbarPages}/>
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile
                        title={'ava discription'}
                        profile={props.state.profilePage}
                        dispatch={props.dispatch}
                    />
                    }
                    />
                    <Route path={'/message'} element={<Dialogs
                        dialogs={props.state.dialogsPage}
                        dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;