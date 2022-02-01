import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarNav} from "./SidebarNav";
import {navbarPagesType} from "../../Redux/navbarReducer";


type propsType = {
    navbar: navbarPagesType
}


export const Navbar:React.FC<propsType> = (props) => {
    return (
        <div className={cl.navbar}>
            {props.navbar.navbar.map((el_navBar) => {
                return (
                    <div className={cl.item}>
                        <NavLink to={el_navBar.path}
                                 className={({isActive}) => isActive ? cl.active : cl.a}>{el_navBar.title}</NavLink>
                    </div>
                )
            })}
            <SidebarNav friends={props.navbar.friends}/>
        </div>
    )
}