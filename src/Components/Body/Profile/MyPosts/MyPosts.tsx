import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {profilePageType} from "../../../../Redux/profileReducer";

type PropsType = {
    state:profilePageType
    addPost:(text:string)=>void
    onChange:(text:string)=>void
}


export const MyPosts: React.FC<PropsType> = (props) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=> {
        let text = newPost.current? newPost.current.value : ''
        props.addPost(text)
        props.onChange('')
    }

    const onChangeHandler = () => {
        let text = newPost.current? newPost.current.value : ''
        props.onChange(text)
    }

    return (
        <div className={cl.blockMyPosts}>
            <div>
                <textarea ref={newPost} value={props.state.newPostText} onChange={onChangeHandler}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Добавить пост</button>
            </div>
            {props.state.arrPosts.map((el_posts) => <Post name={el_posts.name}
                                                    message={el_posts.message}
                                                    likeCount={el_posts.likeCount}/>)}
        </div>
    )
}
