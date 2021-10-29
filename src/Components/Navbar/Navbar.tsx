import React from "react";
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.item}>
                <a>Профиль</a>
            </div>
            <div className={cl.item}>
                <a>Сообщения</a>
            </div>
            <div className={cl.item}>
                <a>Новости</a>
            </div>
            <div className={cl.item}>
                <a>Музыка</a>
            </div>
            <div className={cl.item}>
                <a>Настройки</a>
            </div>
        </div>
    )
}

export default Navbar