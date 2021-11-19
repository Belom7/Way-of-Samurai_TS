import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";

type PropsType={
    arrPosts:Array<arrPosts>
}

type arrPosts={
    name:string
    message:string
    likeCount: number
}


const MyPosts:React.FC<PropsType> = (props) => {
    return (
        <div className={cl.blockMyPosts}>
            <div><textarea/></div>
            <div>
                <button>Добавить пост</button>
            </div>
            {props.arrPosts.map((el_posts) => <Post name={el_posts.name} message={el_posts.message}
                                           likeCount={el_posts.likeCount}/>)}
        </div>
    )
}

export default MyPosts