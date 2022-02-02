import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarNav} from "./SidebarNav";
import {navbarPagesType} from "../../Redux/navbarReducer";


type propsType = {
    navbarPage: navbarPagesType
}


export const Navbar: React.FC<propsType> = (props) => {
    return (
        <div className={cl.navbar}>
            {props.navbarPage.navbar.map((el_navBar) => {
                return (
                    <div key={el_navBar.id} className={cl.item}>
                        <NavLink to={el_navBar.path}
                                 className={({isActive}) => isActive ? cl.active : cl.a}>{el_navBar.title}</NavLink>
                    </div>
                )
            })}
            <SidebarNav friends={props.navbarPage.friends}/>
        </div>
    )
}