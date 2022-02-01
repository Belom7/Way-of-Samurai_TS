import {actionType, postsType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

export const profileReducer = (state:profilePageType, action:actionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postsType = {id: 5, name: 'Kto to iz grota', message: action.text, likeCount: 5}
            state.arrPosts.push(newPost)
            return state
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
        default: return state
    }
}

export const addPostAC = (text:string) => {
    return {
        type:'ADD-POST',
        text:text,
    } as const
}

export const changeNewPostTextAC = (text:string) => {
    return{
        type:'CHANGE-NEW-POST-TEXT',
        text:text
    } as const
}