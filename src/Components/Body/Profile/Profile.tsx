import React from "react";
import cl from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, profilePageType} from "../../../Redux/state";

type PropsType={
    title:string
    profile:profilePageType
    // addPost:(message:string)=>void
    // changeNewPostText:(text:string)=>void
    dispatch:(action:actionType)=>void
}


export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profile}>
            <ProfileInfo title={props.title} />
            <MyPosts profile={props.profile}
                     // addPost={props.addPost}
                     // changeNewPostText={props.changeNewPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
