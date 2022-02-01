import React from "react";
import cl from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionsType} from "../../../App";
import {profilePageType} from "../../../Redux/profileReducer";

type PropsType={
    title:string
    profile:profilePageType
    dispatch:(action:ActionsType)=>void
}


export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profile}>
            <ProfileInfo title={props.title} />
            <MyPosts profile={props.profile}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
