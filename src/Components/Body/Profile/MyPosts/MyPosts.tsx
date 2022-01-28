import React, {ChangeEvent, useState} from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {arrPostsType} from "../../../../Redux/state";

type PropsType = {
    arrPosts: arrPostsType[]
    addPost:(message:string)=>void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    const[value, setValue] = useState('')

    const addPostHandler = ()=> {
        props.addPost(value)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setValue(e.currentTarget.value)
    }


    return (
        <div className={cl.blockMyPosts}>
            <div>
                <input onChange={onChangeHandler}/>
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
