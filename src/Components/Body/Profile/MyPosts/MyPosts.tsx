import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";

const posts = [
    {name: 'Yulia', message: 'Hi!', likeCount: 5},
    {name: 'Anastasiya', message: 'Hi bro!', likeCount: 7},
    {name: 'Boris', message: 'Chepushila!', likeCount: 10},
]


const MyPosts = () => {
    return (
        <div className={cl.blockMyPosts}>
            <div><textarea/></div>
            <div>
                <button>Добавить пост</button>
            </div>
            {posts.map((el_posts) => <Post name={el_posts.name} message={el_posts.message}
                                           likeCount={el_posts.likeCount}/>)}
        </div>
    )
}

export default MyPosts