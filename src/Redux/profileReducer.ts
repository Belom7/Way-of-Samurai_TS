export type profilePageType = {
    arrPosts:postType[]
    newPostText:string
}
export type postType={
    id:number
    name:string
    message:string
    likeCount:number
}

export type ProfileActionsType = addPostType | changeNewPostType

export type addPostType = ReturnType<typeof addPostAC>
export type changeNewPostType = ReturnType<typeof changeNewPostTextAC>

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
    arrPosts : [
        {id:1, name: 'Yulia', message: 'Hi!', likeCount: 5},
        {id:2, name: 'Anastasiya', message: 'Hi bro!', likeCount: 7},
        {id:3, name: 'Boris', message: 'Chepushila!', likeCount: 10},
    ],
    newPostText : ''
}

export const profileReducer = (state:profilePageType = initialState, action:ProfileActionsType):profilePageType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost: postType = {id: 5, name: 'Kto to iz grota', message: action.text, likeCount: 5}
            return {
                ...state,
                arrPosts: state.arrPosts.concat(newPost)
            }
        }
        case CHANGE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.text
            }
        }
        default: return state
    }
}

export const addPostAC = (text:string) => {
    return {
        type:ADD_POST,
        text:text,
    } as const
}

export const changeNewPostTextAC = (text:string) => {
    return{
        type:CHANGE_NEW_POST_TEXT,
        text
    } as const
}