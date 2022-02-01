import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarNav} from "./SidebarNav";
import {appStoreType} from "../../Redux/store";


type propsType = {
    store:appStoreType
}


export const Navbar:React.FC<propsType> = (props) => {
    return (
        <div className={cl.navbar}>
            {props.store.getState().navbarPage.navbar.map((el_navBar) => {
                return (
                    <div className={cl.item}>
                        <NavLink to={el_navBar.path}
                                 className={({isActive}) => isActive ? cl.active : cl.a}>{el_navBar.title}</NavLink>
                    </div>
                )
            })}
            <SidebarNav friends={props.store.getState().navbarPage.friends}/>
        </div>
    )
}