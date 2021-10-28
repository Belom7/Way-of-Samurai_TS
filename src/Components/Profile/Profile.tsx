import React from "react";
import cl from './Profile.module.css'

const Profile = () => {
    return (
        <div className={cl.profile}>
            <img src={'https://www.pnp.ru/upload/entities/2021/04/19/18/article/detailPicture/7e/66/9f/55/23c871532e2289d5791561c8adda1a1a.jpg'}/>
            <div>ava + description </div>
            <div>My posts</div>
            <div>New posts</div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}

export default Profile