import React from "react";
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={cl.profile}>
            <img src={'https://www.pnp.ru/upload/entities/2021/04/19/18/article/detailPicture/7e/66/9f/55/23c871532e2289d5791561c8adda1a1a.jpg'}/>
            <div>ava + description </div>
            <MyPosts/>
        </div>
    )
}

export default Profile