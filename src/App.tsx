import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Body/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Components/Body/Dialogs/Dialogs";

const arrName = [
    {id:1, name: 'Maks'},
    {id:2, name: 'Yulia'},
    {id:3, name: 'Sasha'},
    {id:4, name: 'Evgen'},
    {id:5, name: 'Ivan'},
]

const arrMessage = [
    {message: 'Hi'},
    {message: 'Bay'},
    {message: 'Fack you!'},
    {message: 'ha-ha'},
]

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='app_content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile title={'ava discription'}/>}/>
                    <Route path={'/message'} element={<Dialogs name={arrName} message={arrMessage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;


// {/*render(*/
// }
// {/*    <BrowserRouter>*/
// }
// {/*        <Routes>*/
// }
// {/*            <Route path="/" element={<App/>}>*/
// }
// {/*                <Route path="expenses" element={<Expenses/>}/>*/
// }
// {/*                <Route path="invoices" element={<Invoices/>}/>*/
// }
// {/*            </Route>*/
// }
// {/*        </Routes>*/
// }
// {/*    </BrowserRouter>,*/
// }