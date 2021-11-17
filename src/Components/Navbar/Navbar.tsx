import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const arrNavBar = [
    {path: '/profile', title: 'Профиль'},
    {path: '/message', title: 'Сообщения'},
    {path: '/news', title: 'Новости'},
    {path: '/music', title: 'Музыка'},
    {path: '/settings', title: 'Настройки'},
]

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            {arrNavBar.map((el_navBar) => {
                return (
                    <div className={cl.item}>
                        <NavLink to={el_navBar.path}className={({isActive}) => isActive ? cl.active : cl.a}>{el_navBar.title}</NavLink>
                    </div>
                )
            })}
            {/*<div className={cl.item}>
                <NavLink to='/profile' className={({isActive})=> isActive ? cl.active : ''}>Профиль</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/message'>Сообщения</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/news'>Новости</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/music'>Музыка</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/settings'>Настройки</NavLink>
            </div>*/}
        </div>
    )
}