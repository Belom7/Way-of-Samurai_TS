import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";


const MyPosts = () => {
    return (
        <div className={cl.blockMyPosts}>
            <div><textarea/></div>
            <div><button>Добавить пост</button></div>
            <Post name={'Yulia'} message={'Hi!'} likeCount={5}/>
            <Post name={'Anastasiya'} message={'Hi, bro'} likeCount={15}/>
        </div>
    )
}

export default MyPosts