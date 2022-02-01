import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./Components/Body/Dialogs/DialogsContainer";
import {NavbarContainer} from "./Components/Navbar/NavbarContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <NavbarContainer />
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile title={'ava discription'}/>}/>
                    <Route path={'/message'} element={<DialogsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;