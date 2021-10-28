import React from "react";
import cl from './Profile.module.css'
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <div><textarea/></div>
            <div><button>Добавить пост</button></div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts