import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {actionType, profilePageType} from "../../../../Redux/state";

type PropsType = {
    profile:profilePageType
    dispatch:(action:actionType)=>void
}

export const MyPosts: React.FC<PropsType> = (props) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=> {
        let text = newPost.current? newPost.current.value : ''
        let action:actionType = {type:'ADD-POST', text:text};
        props.dispatch(action)
        let action2:actionType = {type:'CHANGE-NEW-POST-TEXT', text:''};
        props.dispatch(action2)
    }

    const onChangeHandler = () => {
        let text = newPost.current? newPost.current.value : ''
        let action:actionType = {type: 'CHANGE-NEW-POST-TEXT', text: text};
        props.dispatch(action)
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
