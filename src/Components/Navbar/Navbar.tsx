import React from "react";
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.item}>
                <a>Profile</a>
            </div>
            <div className={cl.item}>
                <a>Message</a>
            </div>
            <div className={cl.item}>
                <a>News</a>
            </div>
            <div className={cl.item}>
                <a>Music</a>
            </div>
            <div className={cl.item}>
                <a>Setting</a>
            </div>
        </div>
    )
}

export default Navbar