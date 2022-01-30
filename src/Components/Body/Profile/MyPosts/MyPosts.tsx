import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {postsType} from "../../../../Redux/state";

type PropsType = {
    arrPosts: postsType[]
    addPost:(message:string)=>void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=> {
        let text = newPost.current? newPost.current.value : ''
        props.addPost(text)
    }



    return (
        <div className={cl.blockMyPosts}>
            <div>
                <textarea ref={newPost}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Добавить пост</button>
            </div>
            {props.arrPosts.map((el_posts) => <Post name={el_posts.name}
                                                    message={el_posts.message}
                                                    likeCount={el_posts.likeCount}/>)}
        </div>
    )
}
