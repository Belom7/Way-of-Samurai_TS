import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {appStoreType} from "../../../../Redux/store";

type PropsType = {
    store:appStoreType
}


export const MyPostsContainer: React.FC<PropsType> = (props) => {

    const addPostHandler = (text:string)=> {
        props.store.dispatch(addPostAC(text))
        props.store.dispatch(changeNewPostTextAC(''))
    }

    const onChangeHandler = (text:string) => {
        props.store.dispatch(changeNewPostTextAC(text))
    }

    return (
        <MyPosts state={props.store.getState().profilePage} addPost={addPostHandler} onChange ={onChangeHandler}/>
    )
}
