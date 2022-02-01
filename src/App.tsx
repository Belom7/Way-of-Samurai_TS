import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";
import {appStateType} from "./Redux/store";
import {DialogsActionType} from "./Redux/dialogReducer";
import {ProfileActionsType} from "./Redux/profileReducer";

type propsType={
    state:appStateType
    dispatch:(action:ActionsType)=>void
}

export type ActionsType = DialogsActionType | ProfileActionsType

function App(props:propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar navbar={props.state.navbarPage}/>
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
                        dialogs={props.state.dialogPage}
                        dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;