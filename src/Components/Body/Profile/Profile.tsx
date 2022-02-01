import React from "react";
import cl from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {appStoreType} from "../../../Redux/store";

type PropsType={
    title:string
    store:appStoreType
}


export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.profile}>
            <ProfileInfo title={props.title} />
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}
