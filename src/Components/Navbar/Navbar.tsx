import React from "react";
import cl from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.item}>
                <a href='/profile'>Профиль</a>
            </div>
            <div className={cl.item}>
                <a href='/message'>Сообщения</a>
            </div>
            <div className={cl.item}>
                <a href='/news'>Новости</a>
            </div>
            <div className={cl.item}>
                <a href='/music'>Музыка</a>
            </div>
            <div className={cl.item}>
                <a href='/settings'>Настройки</a>
            </div>
        </div>
    )
}