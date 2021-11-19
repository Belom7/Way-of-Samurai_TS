import React from "react";
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type PropsType={
    title:string
    arrPosts:Array<arrPosts>
}

type arrPosts={
    name:string
    message:string
    likeCount: number
}

export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profile}>
            <ProfileInfo title={props.title}/>
            <MyPosts arrPosts={props.arrPosts}/>
        </div>
    )
}
