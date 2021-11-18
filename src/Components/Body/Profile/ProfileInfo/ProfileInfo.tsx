import React from "react";
import cl from './ProfileInfo.module.css'


type PropsType={
    title:string
}

export const ProfileInfo:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profileInfo}>
            <img src={'https://www.pnp.ru/upload/entities/2021/04/19/18/article/detailPicture/7e/66/9f/55/23c871532e2289d5791561c8adda1a1a.jpg'}/>
            <div className={cl.blockContent}>ava + description </div>
        </div>
    )
}
