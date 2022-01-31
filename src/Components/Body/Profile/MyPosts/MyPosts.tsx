import React from "react";
import cl from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {actionType, addPostType, changeNewPostType, profilePageType} from "../../../../Redux/state";

type PropsType = {
    profile:profilePageType
    dispatch:(action:actionType)=>void
}


const addPostAC = (text:string):addPostType => {
    return {
        type:'ADD-POST',
        text:text,
    }
}

const changeNewPostTextAC = (text:string):changeNewPostType => {
    return{
        type:'CHANGE-NEW-POST-TEXT',
        text:text
    }
}


export const MyPosts: React.FC<PropsType> = (props) => {

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = ()=> {
        let text = newPost.current? newPost.current.value : ''
        props.dispatch(addPostAC(text))
        props.dispatch(changeNewPostTextAC(''))
    }

    const onChangeHandler = () => {
        let text = newPost.current? newPost.current.value : ''
        props.dispatch(changeNewPostTextAC(text))
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
