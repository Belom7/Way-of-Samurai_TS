import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../../storeContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPostHandler = (text:string)=> {
                    store.dispatch(addPostAC(text))
                    store.dispatch(changeNewPostTextAC(''))
                }

                const onChangeHandler = (text:string) => {
                    store.dispatch(changeNewPostTextAC(text))
                }
                return (
                    <MyPosts state={store.getState().profilePage} addPost={addPostHandler} onChange ={onChangeHandler}/>
                )
            }
        }
        </StoreContext.Consumer>

    )
}
