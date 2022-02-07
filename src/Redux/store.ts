import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {navbarReducer} from "./navbarReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage: dialogReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers)

export type appStoreType = typeof store
export type appStateType = ReturnType<typeof reducers>


window.store = store