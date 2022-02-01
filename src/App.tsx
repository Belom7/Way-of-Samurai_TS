import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {appStoreType} from "./Redux/store";
import {DialogsContainer} from "./Components/Body/Dialogs/DialogsContainer";


type propsType={
    store:appStoreType
}

function App(props:propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar store={props.store}/>
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile
                        title={'ava discription'}
                        store={props.store}
                    />
                    }
                    />
                    <Route path={'/message'} element={<DialogsContainer
                        store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;