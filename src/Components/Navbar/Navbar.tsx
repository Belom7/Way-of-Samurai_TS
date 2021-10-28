import React from "react";
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.item}>
                <a>Моя станица</a>
            </div>
            <div className={cl.item}>
                <a>Новости</a>
            </div>
            <div className={cl.item}>
                <a>Сообщения</a>
            </div>
            <div className={cl.item}>
                <a>Друзья</a>
            </div>
            <div className={cl.item}>
                <a>Сообщества</a>
            </div>
            <div className={cl.item}>
                <a>Фотографии</a>
            </div>
            <div className={cl.item}>
                <a>Музыка</a>
            </div>
            <div className={cl.item}>
                <a>Видео</a>
            </div>
            <div className={cl.item}>
                <a>Клипы</a>
            </div>
            <div className={cl.item}>
                <a>Игры</a>
            </div>
            <div className={cl.item}>
                <a>Объявления</a>
            </div>
        </div>
    )
}

export default Navbar