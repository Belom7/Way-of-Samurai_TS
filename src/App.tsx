import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";
import {dialogsPageType, navbarPagesType, profilePageType} from "./Redux/state";

type propsType={
    state:stateType
    addPost:(message:string)=>void
    changeNewPostText:(text:string)=>void
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
                        addPost={props.addPost}
                        changeNewPostText={props.changeNewPostText}
                    />
                    }
                    />
                    <Route path={'/message'} element={<Dialogs dialogs={props.state.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;