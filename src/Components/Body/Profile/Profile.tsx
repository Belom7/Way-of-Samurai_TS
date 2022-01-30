import React from "react";
import cl from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../../Redux/state";

type PropsType={
    title:string
    profile:profilePageType
    addPost:(message:string)=>void
    changeNewPostText:(text:string)=>void
}


export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profile}>
            <ProfileInfo title={props.title} />
            <MyPosts profile={props.profile} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        </div>
    )
}
