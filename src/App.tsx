import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";

type propsType={
    state:stateType
}

type stateType={
    profile:profileType
    dialogs:dialogsType
}

type profileType={
    arrPosts:Array<arrPostsType>
}

type dialogsType={
    arrName:Array<arrNameType>
    arrMessage:Array<arrMessageType>
}

type arrNameType={
    id:number
    name:string
}

type arrMessageType={
    message:string
}

type arrPostsType={
    name:string
    message:string
    likeCount:number
}

function App(props:propsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile title={'ava discription'} profile={props.state.profile}/>}/>
                    <Route path={'/message'} element={<Dialogs dialogs={props.state.dialogs}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;