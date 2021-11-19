import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";

type typeProps ={
    arrName: Array<arrNameType>
    arrMessage: Array<arrMessage>
    arrPosts:Array<arrPosts>

}

type arrNameType ={
    id:number
    name:string
}

type arrMessage={
    message:string
}

type arrPosts={
    name:string
    message:string
    likeCount: number
}



function App(props:typeProps) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile title={'ava discription'} arrPosts={props.arrPosts}/>}/>
                    <Route path={'/message'} element={<Dialogs arrName={props.arrName} arrMessage={props.arrMessage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;