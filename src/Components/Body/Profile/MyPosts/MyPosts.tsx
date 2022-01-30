import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {profilePageType} from "../../../../Redux/state";

type PropsType = {
    profile:profilePageType
    addPost:(message:string)=>void
    changeNewPostText:(text:string)=>void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=> {
        let text = newPost.current? newPost.current.value : ''
        props.addPost(text)
        props.changeNewPostText('')
    }

    const onChangeHandler = () => {
        let text = newPost.current? newPost.current.value : ''
        props.changeNewPostText(text)
    }

    return (
        <div className={cl.blockMyPosts}>
            <div>
                <textarea ref={newPost} value={props.profile.newPostText} onChange={onChangeHandler}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Добавить пост</button>
            </div>
            {props.profile.arrPosts.map((el_posts) => <Post name={el_posts.name}
                                                    message={el_posts.message}
                                                    likeCount={el_posts.likeCount}/>)}
        </div>
    )
}
